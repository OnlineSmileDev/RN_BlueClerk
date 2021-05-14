import React, { useEffect, useRef, useState } from 'react';
import {
  Text,
  View,
  Alert,
  FlatList,
  Platform,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';

import moment from 'moment';
import { MenuProvider } from 'react-native-popup-menu';
import { useDispatch, useSelector } from 'react-redux';
import { DrawerActions } from '@react-navigation/native';
import { useIsDrawerOpen } from '@react-navigation/drawer';
import Job from '../../common/job';
import colors from '../../styles/colors';
import Footer from '../../common/footer';
import Loading from '../../common/loading';
import EmptyView from '../../common/empty-view';
import { setJobs } from '../../redux/job-redux';
import { Service } from '../../config/services';
import AwesomeAlert from 'react-native-awesome-alerts';
import ActionSheetCustom from 'react-native-actionsheet';
import { CommonHeader } from '../../common/common-header';
import Modal from 'react-native-modal';
import styles from './styles';
import MapView, { Marker } from 'react-native-maps';
const { getJobs, startJob, updateJob, getJobDetails } = Service;

const START_JOB = 'Start Job';
const DELEGATE_JOB = 'Transfer Job';
const FINISH_JOB = 'Finish Job';
const PAUSE_JOB = 'Pause/Stop Job';
const SEE_DETAILS = 'See Details';
const SCAN_EQUIPMENT = 'Scan Equipment';
const VIEW_HISTORY = 'View Job History';
const COMMENT = 'Add Comment';
const CANCEL = 'Cancel';
const RESCHEDULED = 'Reschedule';

export default function TodayJobs({ navigation }: any) {

  const ActionSheet = useRef();
  const dispatch = useDispatch();

  const todaysJobs = [];
  const [isJobsStatusChanged, SetIsJobsStatusChanged] = useState(false);
  const [actionOptions, setActionOptions] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [selectedJob, setselectedJob] = useState({});
  const [isModalVisible, setModalVisible] = useState(false);
  const [showMapView, setShowMapView] = useState(false);
  const [isActionModalVisible, setActionModalVisible] = useState(false);
  
  const [initRegion, setRegion] = useState({
    latitude: 32.3888811,
    longitude: -108.6732501,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0721,
  })

  const { jobs } = useSelector((state: any) => state.jobsReducer);

  useEffect(() => {
    getAllJobs();
    SetIsJobsStatusChanged(false)
  }, [isJobsStatusChanged === true]);

  const isDrawerOpen = useIsDrawerOpen();

  useEffect(() => {
    if (isDrawerOpen) {
      getAllJobs();
    }
  }, [isDrawerOpen === true]);
  
  const getAllJobs = async () => {
    try {
      setisLoading(true);
      const response = await getJobs('alljobs');
      const { status, jobs } = response.data;
      if (status == 1) {
        dispatch(setJobs(jobs));
        setisLoading(false);
      } else {
        setisLoading(false);
        Alert.alert('Error', 'Something has gone wrong');
      }
    } catch (err) {
      setisLoading(false);
      Alert.alert('Error', err.message);
    }
  };

  jobs && jobs.map((item: any) => {
    if(item.scheduleDate){
      if (moment(item.scheduleDate).isSame(Date(), 'day') && item.status !== 3) {
        todaysJobs.push(item);
      }
    }
  });

  const isEmpty = isLoading ? false : todaysJobs.length == 0;

  const _handleRefresh = () => {
    SetIsJobsStatusChanged(true)
  };

  const presentActionSheet = async (selectedJob: any) => {
    
    const body = {
      jobId: selectedJob._id,
    };
    let response: any;
      response = await getJobDetails(body);
      const { status, job } = response.data;
      console.log('=======', job._id)
      if (selectedJob.status == 4) {
        setselectedJob(job);
        setModalVisible(!isModalVisible);
      } else {
        const actionOptions = getActions(job);
        setShowMapView(!showMapView);
        setActionOptions(actionOptions);
        setActionModalVisible(!isActionModalVisible);
        setselectedJob(job);
        // setTimeout(() => {
        //   ActionSheet.current.show()
        // }, Platform.OS === 'ios' ? 0 : 100);
      }
  };

  const refresh = () => {
    SetIsJobsStatusChanged(true);
  }

  const handleOptionsClick = (index: any) => {
    setShowMapView(!showMapView);
    setActionModalVisible(!isActionModalVisible);
    if (actionOptions[index] === START_JOB) {
      if (jobs.some((item: any) => item.status == '1')) {
        setShowWarning(true);
      } else {
        _startJob();
      }
    } else if (actionOptions[index] == VIEW_HISTORY) {
      navigation.navigate('ViewHistory');
    } else if (actionOptions[index] == PAUSE_JOB) {
      _updateJob(0);
    } else if (actionOptions[index] == COMMENT) {
      if(selectedJob.status == 0){
        Alert.alert(
          'Alert',
          "You have not started this job. Click 'Yes', if you still would like to add a comment",
          [
            {
              text: 'No',
              onPress: () => console.log('cancel'),
              style: 'cancel'
            },
            {
              text: 'Yes',
              onPress: () => navigation.navigate('Comment', { job: selectedJob })
            }
          ]
        )
      }
      else{
        navigation.navigate('Comment', { job: selectedJob })
      }
    } else if (actionOptions[index] == RESCHEDULED) {
      navigation.navigate('Rescheduled', { job: selectedJob, onGoBack: refresh });
    } else if (actionOptions[index] == FINISH_JOB) {
      finishJob();
    } else if (actionOptions[index] == SEE_DETAILS) {
      navigation.navigate('Report', { job: selectedJob });
    } else if (actionOptions[index] == SCAN_EQUIPMENT) {
      _handleJob(selectedJob, 'AssignEquipments');
    } else if (actionOptions[index] == DELEGATE_JOB) {
      _handleJob(selectedJob, 'DelegateJob');
    }
  };

  const finishJob = () => {
    Alert.alert('', 'Are you sure you want to finish this job?', [
      {
        text: 'Yes',
        onPress: () => finishJob2(),
      },
      {
        text: 'No',
      },
    ]);
  };

  const finishJob2 = () => {
    if (selectedJob.equipment_scanned) {
      _updateJob(2);
      return;
    }

    Alert.alert(
      '',
      'No scans have been added to this job.  Click yes to confirm you would like to finish this job without scanning/adding equipment.',
      [
        {
          text: 'Yes',
          onPress: () => _updateJob(2),
        },
        {
          text: 'No',
        },
      ],
    );
  };

  const _startJob = async () => {
    const param = {
      jobId: selectedJob._id,
    };

    try {
      const response = await startJob(param);
      const { status, message } = response.data;
      if (status == '1') {
        Alert.alert('Success', message);
        SetIsJobsStatusChanged(true)
      } else {
        Alert.alert('Error', message);
      }
    } catch (err) {
      Alert.alert('Error', 'Something has gone wrong');
    }
  };

  const _updateJob = async (param: any) => {
    try {
      const response = await updateJob({
        jobId: selectedJob._id,
        status: param,
        comment: selectedJob.comment,
      });

      const { status, message } = response.data;

      if (status == 1) {
        Alert.alert('Success', message);
        SetIsJobsStatusChanged(true)
      } else {
        Alert.alert('Error', message);
      }
    } catch (err) {
      Alert.alert('Error', 'Something has gone wrong');
    }
  };

  const getActions = (job: any) => {
    const options: any[] = [];
    if (job.status == 0) {
      options.push(START_JOB);
      options.push(SEE_DETAILS);
      options.push(COMMENT);
      options.push(RESCHEDULED);
      options.push(DELEGATE_JOB);
    } else if (job.status == 1) {
      options.push(PAUSE_JOB);
      options.push(SEE_DETAILS);
      options.push(COMMENT);
      options.push(RESCHEDULED);
      options.push(FINISH_JOB);
    } else if (job.status == 2) {
      options.push(SEE_DETAILS);
      options.push(COMMENT);
      options.push(RESCHEDULED);
    } else if (job.status == 3) {
      options.push(SEE_DETAILS);
      options.push(COMMENT);
      options.push(RESCHEDULED);
    }
    options.push(CANCEL);
    return options;
  };

  const _handleJob = (item: any, route: any) => {
    navigation.push(route, { item });
  };

  const _getTypeIcon = (title: any) => {
    if (title.trim() == 'Repair') return 'ios-hammer';
    if (title.trim() == 'Diagnosis') return 'md-bug';
    if (title.trim() == 'Maintenance') return 'ios-build';
    if (title.trim() == 'Installation') return 'ios-download';
    return 'ios-hammer';
  };

  const getJobStatus = (item: any) => {
    let status = 'Not Started';
    if (item.status == '0') status = 'Not Started';
    else if (item.status == '1') status = 'Started';
    else if (item.status == '2') status = 'Completed';
    else if (item.status == '3') status = 'Cancelled';
    else if (item.status == '4') status = 'Rescheduled';

    return status;
  };

  const _renderItem = ({ item }: any) => {
    const status = getJobStatus(item);
    const type = _getTypeIcon(item.type?.title ?? '');
    return (
      <Job
        item={item}
        type={type}
        status={status}
        onClick={() => presentActionSheet(item)}
      />
    );
  };

  const _listEmptyComponent = () => <EmptyView title="No jobs scheduled today" icon="ios-hammer" />;

  const renderHeader = () => (
    jobs.length > 0 && (
      <View style={styles.listHeader}>
        <Text style={styles.listTitle}>Today's Jobs</Text>
      </View>
    )
  );

  const navigateTo = () => {
    navigation.navigate('AllJobs');
  };

  const goRescheduledJobDetail = () => {
    setModalVisible(false);
    navigation.navigate('Report', { job: selectedJob });
  }

  return (
    <MenuProvider style={styles.container}>
      <CommonHeader navigation={navigation} />
      {isLoading ? (
        <Loading />
      ) : (
        <ScrollView
          style={{ flex: 1 }}
          refreshControl={(
            <RefreshControl
              enabled
              onRefresh={_handleRefresh}
              refreshing={isJobsStatusChanged}
            />
          )}
        >
          {!isEmpty
            ? [
              <FlatList
                ListHeaderComponent={() => renderHeader()}
                data={todaysJobs}
                renderItem={_renderItem}
                keyExtractor={(item) => item._id}
              />,
              !isLoading && (
                <TouchableOpacity
                  style={styles.seeAllWrapper}
                  key={1}
                  onPress={navigateTo}
                >
                  <Text style={styles.seeAllText}>See all jobs</Text>
                </TouchableOpacity>
              ),
            ]
            : [
              _listEmptyComponent(),
              !isLoading && (
                <TouchableOpacity
                  style={styles.seeAllWrapper}
                  key={1}
                  onPress={navigateTo}
                >
                  <Text style={styles.seeAllText}>See all jobs</Text>
                </TouchableOpacity>
              ),
              ]}
          <ActionSheetCustom
            ref={ActionSheet}
            title="Choose action"
            tintColor="#00bfff"
            options={actionOptions}
            cancelButtonIndex={actionOptions.length - 1}
            onPress={(index) => handleOptionsClick(index)}
          />
        </ScrollView>
      )}
      <Footer
        onOpen={() => {
          navigation.dispatch(DrawerActions.openDrawer());
        }}
      />
      <AwesomeAlert
        show={showWarning}
        title="warning"
        message="Job already in progress. To start this job, you must pause the current job. Would you go check all jobs?"
        showConfirmButton
        showCancelButton
        confirmText="Yes, Go All jobs"
        cancelText="Close"
        confirmButtonColor={colors.assertColor}
        onCancelPressed={() => setShowWarning(false)}
        onConfirmPressed={() => {
          setShowWarning(false);
          navigation.navigate('AllJobs');
        }}
      />
      <Modal isVisible={isModalVisible} style={{ flex: 1, alignItems: 'center' }}>
        <View style={styles.alertView}>
          <Text style={styles.alertTxt}>This Job Has Been Rescheduled</Text>
          <TouchableOpacity onPress={goRescheduledJobDetail}>
            <Text style={styles.detailBtn}>See Details</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModalVisible(!isModalVisible)}>
            <Text style={styles.detailBtn}>OK</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <Modal isVisible={isActionModalVisible} style={styles.actionModalContainerView}>
        <View style={styles.actionView}>
          <Text style={styles.chooseTitle}>Choose action</Text>
          {
            actionOptions.map((item, index) => {
              return (
                <TouchableOpacity style={[styles.actionItemView, {
                    borderColor: item === 'Cancel'? '#c1c1c1' : '#e1e1e1',
                    borderTopWidth: item === 'Cancel' ? 4 : 0.5,
                    paddingBottom: item === 'Cancel'? Platform.OS == 'ios'? 25 : 10: 10,
                  }]}
                  onPress = {() => handleOptionsClick(index)}
                >
                  <Text style={styles.actionItemLbl}>{item}</Text>
                </TouchableOpacity>
              )
            })
          }
        </View>
        {showMapView && <View style={styles.mapContainerView}>
          {
            selectedJob.jobLocation ? 
              (
                <MapView
                  provider="google"
                  region={{
                    latitude: selectedJob.jobLocation.location.coordinates[1],
                    longitude: selectedJob.jobLocation.location.coordinates[0],
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.004,
                  }}
                  style={styles.mapView}
                >
                  <Marker
                    coordinate={{
                      latitude: selectedJob.jobLocation.location.coordinates[1],
                      longitude: selectedJob.jobLocation.location.coordinates[0],
                    }}
                    title={'location'}
                  />
                </MapView>
              ): selectedJob.customer ?
              (
                <MapView
                  provider="google"
                  region={{
                    latitude: selectedJob.customer.location.coordinates[1],
                    longitude: selectedJob.customer.location.coordinates[0],
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.004,
                  }}
                  style={styles.mapView}
                >
                  <Marker
                    coordinate={{
                      latitude: selectedJob.customer.location.coordinates[1],
                      longitude: selectedJob.customer.location.coordinates[0],
                    }}
                    title={'location'}
                  />
                </MapView>
              ) :
              (
                <MapView
                  region={initRegion}
                  style={styles.mapView}
                >
                  <Marker
                    coordinate={initRegion}
                    title={'location'}
                  />
                </MapView>
              )
          }


          {/* {
            selectedJob.customer && selectedJob.customer.location.coordinates.length > 1 ?
              (
                <MapView
                  provider="google"
                  region={{
                    latitude: selectedJob.customer.location.coordinates[1],
                    longitude: selectedJob.customer.location.coordinates[0],
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0721,
                  }}
                  style={styles.mapView}
                >
                  <Marker
                    coordinate={{
                      latitude: selectedJob.customer.location.coordinates[1],
                      longitude: selectedJob.customer.location.coordinates[0],
                      latitudeDelta: 0.0922,
                      longitudeDelta: 0.0721,
                    }}
                    title={'location'}
                  />
                </MapView>
              ): (
                <MapView
                  region={initRegion}
                  style={styles.mapView}
                >
                  <Marker
                    coordinate={initRegion}
                    title={'location'}
                  />
                </MapView>
              )
          } */}
          
      </View>}
      </Modal>
    </MenuProvider>
  );
}

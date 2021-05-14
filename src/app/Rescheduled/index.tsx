import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native';

import Toast from 'react-native-simple-toast';

import { StackScreenProps } from '@react-navigation/stack';

import { Service } from '../../config/services';
import { Header } from '../../common/common-header';
import Loading from '../../common/loading';

import styles from './styles';

type JobStackParamList = {
  jobs: undefined;
  ScanTagScreen: undefined;
  EquipmentDetail:
  | {
    nfcTag: string | undefined;
  }
  | undefined;
  GuideScreen: undefined;
  AllJobs: undefined;
  Report:
  | {
    job: object | string | undefined;
    from: boolean | undefined;
  }
  | undefined;
};

type Props = StackScreenProps<JobStackParamList, 'Report'>;

function Rescheduled({ navigation, route }: Props) {
  const [isLoading, setLoading] = useState(true);
  const [id, setId] = useState('');
  const [status, setStatus] = useState(-1);
  const [note, setNote] = useState('');

  const _goBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    setId(route.params.job && route.params.job._id ? route.params.job._id : null);
    getJob(route.params.job._id);
    setStatus(route.params.job.status);
  }, []);

  const getJob = async (id) => {
    const body = {
      jobId: id,
    };
    let response: any;
    try {
      response = await Service.getJobDetails(body);
      const { status, job } = response.data;
      setNote(job.note?job.note : '')
      setLoading(false)
    } catch (err) {
      setLoading(false);
      Alert.alert('Error', 'Something has gone wrong');
    }
  };

  const submitReschedule = async () => {
    if (note === '') {
      Alert.alert('Note is required when you reschedule the job');
      return;
    }
    setLoading(true)
    const response = await Service.updateJob({
      jobId: id,
      status: 4,
      note: note,
    });
    const { status, message } = response.data;

    if (status == 1) {
      setLoading(false)
      setTimeout(() => {
        Toast.show(message);
        route.params.onGoBack();
        navigation.goBack()
      }, 300);
    } else {
      setLoading(false);
      Alert.alert('Error', message);
    }
  }

  return (
    <View style={styles.container}>
      <Header title="Rescheduled" leftIcon="goback" _goBack={() => _goBack()} />
      {!isLoading && (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.newcomment}>
            <TextInput
              placeholder="Type in note"
              style={styles.input}
              multiline={true}
              numberOfLines={10}
              textAlignVertical="top"
              value={note}
              onChangeText={(event) => setNote(event)}
            />
            <TouchableOpacity onPress={() => submitReschedule()}>
              <View style={styles.submitButton}>
                <Text style={styles.submitButtonLabel}>Submit</Text>
              </View>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      )}
      {isLoading && (
        <View style={{ flex: 1 }}>
          <Loading />
        </View>
      )}
    </View>
  );
}

export default Rescheduled;

import React from 'react';
import {
  Dimensions, StyleSheet, Text, TouchableOpacity, View, Linking, Platform
} from 'react-native';
import moment from 'moment';
import openMap, { createOpenLink } from 'react-native-open-maps';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Row } from '../styles/shared-styles';
import { turquoise, white } from '../styles/colors';
import Label from './label';
import { Service } from '../config/services';
const { getJobDetails } = Service;

const _ = require('lodash');

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

type Props = {
  item: any;
  type: string;
  status: string;
  onClick: () => void;
};

function Job({
  item, type, status, onClick,
}: Props) {
  const formattedJobDate = item.scheduleDate? moment(item.scheduleDate) : '';
  const [date, setDate] = React.useState(formattedJobDate);
  const [isToday, setIsToday] = React.useState(formattedJobDate == ''? "": formattedJobDate.isSame(new Date(), 'day'));

  const txtStyle = isToday ? {} : { color: '#999' };

  const getDayTitle = () => date == '' ? '' : date.format('MM/DD/YYYY');
  
  async function openJobLocationInMaps() {
    const body = {
      jobId: item._id,
    };
    let response: any;
    response = await getJobDetails(body);
    const { status, job } = response.data;

    const coordinatesList = {
      latitude: (job.jobSite && job.jobSite ?.location.coordinates[1]) ||
        (job.jobLocation && job.jobLocation ?.location.coordinates[1]) ||
        (job.customer && job.customer.location.coordinates[1]) ||
        '',
      longitude: (job.jobSite && job.jobSite ?.location.coordinates[0]) ||
        (job.jobLocation && job.jobLocation ?.location.coordinates[0]) ||
        (job.customer && job.customer.location.coordinates[0]) ||
        '',
    };


    console.log("----@@@1123", job)
    
    var street;
    var state;
    var city;
    var zipcode;
    var name;

    // Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${coordinatesList.latitude},${coordinatesList.longitude}`)

    if (!job.jobsite && !job.jobLocation) {
      
      street = job.customer.address.street ? job.customer.address.street : '';
      state = job.customer.address.state ? job.customer.address.state : '';
      city = job.customer.address.city ? job.customer.address.city : '';
      zipcode = job.customer.address.zipCode ? job.customer.address.zipCode : '';
      Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${street},${city},${state},${zipcode}`)
      // Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${coordinatesList.latitude},${coordinatesList.longitude}`)
    } else if (job.jobLocation) {
      name = job.jobLocation.name ? job.jobLocation.name : '';
      if (name) {
        // Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${name}`)
        Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${coordinatesList.latitude},${coordinatesList.longitude}`)
      } else {
        console.log('********')
        Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${coordinatesList.latitude},${coordinatesList.longitude}`)
      }
    } else {
      console.log('3333%%%%%%%')
    }

    // Linking.openURL('https://www.google.com/maps/search/?api=1&query=' + coordinatesList.latitude + ',' + coordinatesList.longitude)
  }

  const renderStatus = (jobStatus: any) => {
    switch (jobStatus) {
      case 0:
        return (
          <MaterialIcons
            name="location-on"
            size={30}
            color={turquoise}
            onPress={openJobLocationInMaps}
          />
        );
      case 1:
        break;
    }

    const statusInfo = {
      1: { text: 'STARTED', icon: 'play-arrow', color: '#32CD32' },
      2: { text: 'COMPLETED', icon: 'check-circle', color: '#F19162' },
      3: { text: 'CANCELLED', icon: 'not-interested', color: '#f00' },
      4: { text: 'RESCHEDULED', icon: 'location-on', color: '#F19162' },
    };

    const { text, icon, color } = statusInfo[jobStatus];

    return (
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <MaterialIcons name={icon} size={18} color={color} style={styles.completedMark}/>
        <Text style={{ color }}>{text}</Text>
      </View>
    );
  };

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => onClick()}
      activeOpacity={0.7}
    >
      <View style={{ flex: 1 }}>
        <Text style={[styles.dateLabel, txtStyle]}>{getDayTitle()}</Text>
        <View style={styles.detailRow}>
          <Label style={styles.keyLabel}>Customer</Label>
          <Text style={[styles.valueLabel, txtStyle]}>
            {_.get(item?.customer, 'profile.displayName', ' --- ')}
          </Text>
        </View>
        <View style={styles.detailRow}>
          <Label style={styles.keyLabel}>Task</Label>
          <Text style={[styles.valueLabel, txtStyle]}>
            {item?.type?.title ?? 'Repair'}
          </Text>
        </View>
      </View>
      <View style={styles.jobIdContainer}>
        {renderStatus(item?.status)}
        <Label style={[styles.jobIdText, txtStyle]}>
          #
          {' '}
          {item?.jobId ?? ''}
        </Label>
      </View>
    </TouchableOpacity>
  );
}

export default Job;

const styles = StyleSheet.create({
  card: {
    marginHorizontal: SCREEN_WIDTH * 0.03,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: 'rgba(0,0,0,0.25)',
    shadowOpacity: 1,
    elevation: 3,
    ...Row,
    backgroundColor: white,
    borderRadius: 4,
    padding: 12,
    marginBottom: 8,
  },
  cardContent: {
    flexDirection: 'row',
  },
  dateLabel: {
    fontSize: 16,
    fontWeight: '700',
  },
  detailRow: {
    ...Row,
    marginTop: 5,
  },
  keyLabel: {
    color: '#999',
    width: 75,
  },
  valueLabel: {
    marginStart: 10,
    fontSize: 16,
  },
  jobIdContainer: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  jobIdText: {
    color: turquoise,
    fontSize: 14,
    fontWeight: '500',
    marginEnd: 5,
  },
  completedMark: {
    borderRadius: 100,
    borderColor: '#f00',
    paddingLeft: 2,
    marginRight: 4,
  },
});

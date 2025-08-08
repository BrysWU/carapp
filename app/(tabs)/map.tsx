import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MapPin, Users, Navigation, Filter, Layers } from 'lucide-react-native';

export default function MapScreen() {
  const [selectedGroup, setSelectedGroup] = useState('all');
  const [mapView, setMapView] = useState('standard');

  const groups = [
    { id: 'all', name: 'All Groups', color: '#FFD700' },
    { id: 'bmw', name: 'BMW Enthusiasts', color: '#4F46E5' },
    { id: 'track', name: 'Track Day Warriors', color: '#EF4444' },
  ];

  const activeMembers = [
    { name: 'Mike Chen', car: '2023 BMW M3', location: 'Downtown LA', distance: '2.3 mi', group: 'BMW Enthusiasts' },
    { name: 'Sarah Wilson', car: '2022 Porsche 911', location: 'Santa Monica', distance: '5.7 mi', group: 'Track Day Warriors' },
    { name: 'James Rodriguez', car: '2021 Tesla Model S', location: 'Beverly Hills', distance: '3.1 mi', group: 'BMW Enthusiasts' },
    { name: 'Emily Foster', car: '2020 Audi RS6', location: 'West Hollywood', distance: '4.2 mi', group: 'Track Day Warriors' },
  ];

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#1A1A1A', '#2D2D2D']}
        style={styles.header}
      >
        <Text style={styles.title}>Live Map</Text>
        <View style={styles.controls}>
          <TouchableOpacity style={styles.controlButton}>
            <Filter size={20} color="#FFD700" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.controlButton}>
            <Layers size={20} color="#FFD700" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.controlButton}>
            <Navigation size={20} color="#FFD700" />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <View style={styles.mapContainer}>
        <View style={styles.mapPlaceholder}>
          <MapPin size={48} color="#FFD700" />
          <Text style={styles.mapPlaceholderText}>OpenStreetMap Integration</Text>
          <Text style={styles.mapPlaceholderSubtext}>
            Interactive map will show live member locations
          </Text>
        </View>

        <View style={styles.groupSelector}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {groups.map((group) => (
              <TouchableOpacity
                key={group.id}
                style={[
                  styles.groupChip,
                  selectedGroup === group.id && { backgroundColor: group.color },
                ]}
                onPress={() => setSelectedGroup(group.id)}
              >
                <Text style={[
                  styles.groupChipText,
                  selectedGroup === group.id && { color: '#000000' },
                ]}>
                  {group.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>

      <View style={styles.membersList}>
        <View style={styles.membersHeader}>
          <Text style={styles.membersTitle}>Active Members</Text>
          <View style={styles.activeIndicator}>
            <View style={styles.activeDot} />
            <Text style={styles.activeText}>{activeMembers.length} online</Text>
          </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {activeMembers.map((member, index) => (
            <TouchableOpacity key={index} style={styles.memberCard}>
              <View style={styles.memberAvatar}>
                <Text style={styles.memberInitial}>{member.name[0]}</Text>
              </View>
              <View style={styles.memberInfo}>
                <Text style={styles.memberName}>{member.name}</Text>
                <Text style={styles.memberCar}>{member.car}</Text>
                <View style={styles.memberLocation}>
                  <MapPin size={12} color="#888888" />
                  <Text style={styles.memberLocationText}>{member.location}</Text>
                  <Text style={styles.memberDistance}>• {member.distance}</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.navigateButton}>
                <Navigation size={16} color="#FFD700" />
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F0F',
  },
  header: {
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 16,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  controlButton: {
    backgroundColor: 'rgba(255, 215, 0, 0.1)',
    borderRadius: 8,
    padding: 8,
    marginLeft: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 215, 0, 0.3)',
  },
  mapContainer: {
    flex: 1,
    position: 'relative',
  },
  mapPlaceholder: {
    flex: 1,
    backgroundColor: '#1F1F1F',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#333333',
  },
  mapPlaceholderText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    marginTop: 16,
  },
  mapPlaceholderSubtext: {
    fontSize: 14,
    color: '#888888',
    marginTop: 8,
    textAlign: 'center',
    paddingHorizontal: 32,
  },
  groupSelector: {
    position: 'absolute',
    top: 16,
    left: 16,
    right: 16,
  },
  groupChip: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  groupChipText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  membersList: {
    backgroundColor: '#1A1A1A',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: 20,
    paddingHorizontal: 24,
    maxHeight: 300,
  },
  membersHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  membersTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  activeIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  activeDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#10B981',
    marginRight: 6,
  },
  activeText: {
    fontSize: 14,
    color: '#10B981',
    fontWeight: '600',
  },
  memberCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2D2D2D',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#333333',
  },
  memberAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FFD700',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  memberInitial: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  memberInfo: {
    flex: 1,
  },
  memberName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  memberCar: {
    fontSize: 14,
    color: '#CCCCCC',
    marginTop: 2,
  },
  memberLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  memberLocationText: {
    fontSize: 12,
    color: '#888888',
    marginLeft: 4,
  },
  memberDistance: {
    fontSize: 12,
    color: '#888888',
    marginLeft: 4,
  },
  navigateButton: {
    backgroundColor: 'rgba(255, 215, 0, 0.1)',
    borderRadius: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 215, 0, 0.3)',
  },
});
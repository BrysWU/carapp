import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Users, Plus, Search, MapPin, Settings, Crown, Star } from 'lucide-react-native';

export default function GroupsScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const myGroups = [
    {
      id: 1,
      name: 'BMW Enthusiasts',
      members: 847,
      location: 'Los Angeles, CA',
      role: 'Admin',
      image: 'https://images.pexels.com/photos/1638459/pexels-photo-1638459.jpeg',
      activity: 'Active now',
    },
    {
      id: 2,
      name: 'Track Day Warriors',
      members: 234,
      location: 'Orange County, CA',
      role: 'Member',
      image: 'https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg',
      activity: '12 members online',
    },
  ];

  const discoverGroups = [
    {
      id: 3,
      name: 'JDM Legends',
      members: 1205,
      location: 'San Francisco, CA',
      image: 'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg',
      rating: 4.8,
    },
    {
      id: 4,
      name: 'Electric Future',
      members: 567,
      location: 'Silicon Valley, CA',
      image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
      rating: 4.6,
    },
    {
      id: 5,
      name: 'Classic Muscle',
      members: 892,
      location: 'Sacramento, CA',
      image: 'https://images.pexels.com/photos/1638459/pexels-photo-1638459.jpeg',
      rating: 4.9,
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <LinearGradient
        colors={['#1A1A1A', '#2D2D2D']}
        style={styles.header}
      >
        <Text style={styles.title}>Groups</Text>
        <View style={styles.searchContainer}>
          <Search size={20} color="#888" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search groups..."
            placeholderTextColor="#888"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </LinearGradient>

      <View style={styles.content}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>My Groups</Text>
          <TouchableOpacity style={styles.createButton}>
            <Plus size={16} color="#FFD700" />
            <Text style={styles.createButtonText}>Create</Text>
          </TouchableOpacity>
        </View>

        {myGroups.map((group) => (
          <TouchableOpacity key={group.id} style={styles.groupCard}>
            <View style={styles.groupImageContainer}>
              <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.8)']}
                style={styles.groupImageOverlay}
              />
            </View>
            <View style={styles.groupContent}>
              <View style={styles.groupHeader}>
                <Text style={styles.groupName}>{group.name}</Text>
                <View style={styles.roleContainer}>
                  {group.role === 'Admin' && <Crown size={16} color="#FFD700" />}
                  <Text style={[styles.roleText, { color: group.role === 'Admin' ? '#FFD700' : '#888888' }]}>
                    {group.role}
                  </Text>
                </View>
              </View>
              <View style={styles.groupInfo}>
                <View style={styles.groupStat}>
                  <Users size={14} color="#888888" />
                  <Text style={styles.groupStatText}>{group.members} members</Text>
                </View>
                <View style={styles.groupStat}>
                  <MapPin size={14} color="#888888" />
                  <Text style={styles.groupStatText}>{group.location}</Text>
                </View>
              </View>
              <Text style={styles.groupActivity}>{group.activity}</Text>
              {group.role === 'Admin' && (
                <TouchableOpacity style={styles.manageButton}>
                  <Settings size={16} color="#FFD700" />
                  <Text style={styles.manageButtonText}>Manage Group</Text>
                </TouchableOpacity>
              )}
            </View>
          </TouchableOpacity>
        ))}

        <Text style={styles.sectionTitle}>Discover Groups</Text>
        {discoverGroups.map((group) => (
          <TouchableOpacity key={group.id} style={styles.discoverCard}>
            <View style={styles.discoverContent}>
              <Text style={styles.discoverName}>{group.name}</Text>
              <View style={styles.discoverInfo}>
                <View style={styles.groupStat}>
                  <Users size={14} color="#888888" />
                  <Text style={styles.groupStatText}>{group.members} members</Text>
                </View>
                <View style={styles.groupStat}>
                  <MapPin size={14} color="#888888" />
                  <Text style={styles.groupStatText}>{group.location}</Text>
                </View>
                <View style={styles.groupStat}>
                  <Star size={14} color="#FFD700" />
                  <Text style={styles.groupStatText}>{group.rating}</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity style={styles.joinButton}>
              <Text style={styles.joinButtonText}>Join</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F0F',
  },
  header: {
    paddingTop: 60,
    paddingBottom: 24,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  searchIcon: {
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 16,
    fontSize: 16,
    color: '#FFFFFF',
  },
  content: {
    padding: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  createButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 215, 0, 0.1)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#FFD700',
  },
  createButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFD700',
    marginLeft: 4,
  },
  groupCard: {
    backgroundColor: '#1F1F1F',
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#333333',
  },
  groupImageContainer: {
    height: 120,
    position: 'relative',
  },
  groupImageOverlay: {
    ...StyleSheet.absoluteFillObject,
  },
  groupContent: {
    padding: 20,
  },
  groupHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  groupName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    flex: 1,
  },
  roleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  roleText: {
    fontSize: 12,
    fontWeight: '600',
    marginLeft: 4,
  },
  groupInfo: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  groupStat: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  groupStatText: {
    fontSize: 14,
    color: '#888888',
    marginLeft: 4,
  },
  groupActivity: {
    fontSize: 14,
    color: '#10B981',
    marginBottom: 12,
  },
  manageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  manageButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFD700',
    marginLeft: 4,
  },
  discoverCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1F1F1F',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#333333',
  },
  discoverContent: {
    flex: 1,
  },
  discoverName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  discoverInfo: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  joinButton: {
    backgroundColor: '#FFD700',
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  joinButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000000',
  },
});
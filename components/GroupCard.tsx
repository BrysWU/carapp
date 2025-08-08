import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Users, MapPin, Crown, Star } from 'lucide-react-native';

interface Group {
  id: number;
  name: string;
  members: number;
  location: string;
  image: string;
  role?: string;
  activity?: string;
  rating?: number;
}

interface GroupCardProps {
  group: Group;
  onPress: () => void;
  showJoinButton?: boolean;
}

export default function GroupCard({ group, onPress, showJoinButton = false }: GroupCardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <ImageBackground source={{ uri: group.image }} style={styles.imageBackground}>
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.8)']}
          style={styles.overlay}
        />
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.name}>{group.name}</Text>
            {group.role === 'Admin' && (
              <View style={styles.adminBadge}>
                <Crown size={14} color="#FFD700" />
              </View>
            )}
          </View>
          
          <View style={styles.info}>
            <View style={styles.stat}>
              <Users size={14} color="#CCCCCC" />
              <Text style={styles.statText}>{group.members} members</Text>
            </View>
            <View style={styles.stat}>
              <MapPin size={14} color="#CCCCCC" />
              <Text style={styles.statText}>{group.location}</Text>
            </View>
            {group.rating && (
              <View style={styles.stat}>
                <Star size={14} color="#FFD700" />
                <Text style={styles.statText}>{group.rating}</Text>
              </View>
            )}
          </View>

          {group.activity && (
            <Text style={styles.activity}>{group.activity}</Text>
          )}

          {showJoinButton && (
            <TouchableOpacity style={styles.joinButton}>
              <Text style={styles.joinButtonText}>Join Group</Text>
            </TouchableOpacity>
          )}
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 180,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#333333',
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
  content: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    flex: 1,
  },
  adminBadge: {
    backgroundColor: 'rgba(255, 215, 0, 0.2)',
    borderRadius: 12,
    padding: 6,
    borderWidth: 1,
    borderColor: '#FFD700',
  },
  info: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 8,
  },
  stat: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
    marginBottom: 4,
  },
  statText: {
    fontSize: 14,
    color: '#CCCCCC',
    marginLeft: 4,
  },
  activity: {
    fontSize: 14,
    color: '#10B981',
    fontWeight: '500',
    marginBottom: 12,
  },
  joinButton: {
    backgroundColor: '#FFD700',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignSelf: 'flex-start',
  },
  joinButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000000',
  },
});
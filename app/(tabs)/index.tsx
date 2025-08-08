import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Gauge, Zap, Route, Timer, TrendingUp, Award } from 'lucide-react-native';

export default function HomeScreen() {
  const stats = [
    { icon: Route, label: 'Miles Driven', value: '12,847', unit: 'mi', color: '#4F46E5' },
    { icon: Gauge, label: 'Top Speed', value: '147', unit: 'mph', color: '#EF4444' },
    { icon: Zap, label: 'Best 0-60', value: '4.2', unit: 'sec', color: '#F59E0B' },
    { icon: Timer, label: 'Drive Time', value: '127', unit: 'hrs', color: '#10B981' },
  ];

  const achievements = [
    { title: 'Speed Demon', description: 'Reached 100+ mph', earned: true },
    { title: 'Long Hauler', description: 'Drove 1000+ miles', earned: true },
    { title: 'Group Leader', description: 'Started a car group', earned: false },
    { title: 'Track Star', description: 'Visited 5 race tracks', earned: false },
  ];

  const recentActivity = [
    { activity: 'Joined "BMW Enthusiasts" group', time: '2 hours ago' },
    { activity: 'Updated M3 modifications', time: '1 day ago' },
    { activity: 'Completed drive to Pacific Coast', time: '3 days ago' },
    { activity: 'Added new car to collection', time: '1 week ago' },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <LinearGradient
        colors={['#1A1A1A', '#2D2D2D']}
        style={styles.header}
      >
        <Text style={styles.greeting}>Welcome back!</Text>
        <Text style={styles.username}>Alex Johnson</Text>
      </LinearGradient>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Your Stats</Text>
        <View style={styles.statsGrid}>
          {stats.map((stat, index) => (
            <TouchableOpacity key={index} style={styles.statCard}>
              <View style={[styles.statIcon, { backgroundColor: stat.color }]}>
                <stat.icon size={24} color="#FFFFFF" />
              </View>
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statUnit}>{stat.unit}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Achievements</Text>
        <View style={styles.achievementsContainer}>
          {achievements.map((achievement, index) => (
            <View key={index} style={styles.achievementCard}>
              <View style={[styles.achievementIcon, { opacity: achievement.earned ? 1 : 0.3 }]}>
                <Award size={20} color={achievement.earned ? '#FFD700' : '#888888'} />
              </View>
              <View style={styles.achievementText}>
                <Text style={[styles.achievementTitle, { opacity: achievement.earned ? 1 : 0.6 }]}>
                  {achievement.title}
                </Text>
                <Text style={styles.achievementDescription}>{achievement.description}</Text>
              </View>
            </View>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Recent Activity</Text>
        <View style={styles.activityContainer}>
          {recentActivity.map((item, index) => (
            <View key={index} style={styles.activityItem}>
              <View style={styles.activityDot} />
              <View style={styles.activityContent}>
                <Text style={styles.activityText}>{item.activity}</Text>
                <Text style={styles.activityTime}>{item.time}</Text>
              </View>
            </View>
          ))}
        </View>

        <TouchableOpacity style={styles.trendingButton}>
          <TrendingUp size={20} color="#FFD700" />
          <Text style={styles.trendingButtonText}>View Detailed Analytics</Text>
        </TouchableOpacity>
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
    paddingBottom: 32,
    paddingHorizontal: 24,
  },
  greeting: {
    fontSize: 16,
    color: '#CCCCCC',
  },
  username: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 4,
  },
  content: {
    padding: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 16,
    marginTop: 8,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  statCard: {
    backgroundColor: '#1F1F1F',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    width: '48%',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#333333',
  },
  statIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  statUnit: {
    fontSize: 14,
    color: '#888888',
    marginTop: 2,
  },
  statLabel: {
    fontSize: 12,
    color: '#CCCCCC',
    marginTop: 8,
    textAlign: 'center',
  },
  achievementsContainer: {
    marginBottom: 32,
  },
  achievementCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1F1F1F',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#333333',
  },
  achievementIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#2D2D2D',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  achievementText: {
    flex: 1,
  },
  achievementTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  achievementDescription: {
    fontSize: 14,
    color: '#888888',
    marginTop: 2,
  },
  activityContainer: {
    marginBottom: 32,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  activityDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FFD700',
    marginTop: 6,
    marginRight: 16,
  },
  activityContent: {
    flex: 1,
  },
  activityText: {
    fontSize: 16,
    color: '#FFFFFF',
    lineHeight: 22,
  },
  activityTime: {
    fontSize: 14,
    color: '#888888',
    marginTop: 4,
  },
  trendingButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 215, 0, 0.1)',
    borderRadius: 12,
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: '#FFD700',
  },
  trendingButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFD700',
    marginLeft: 8,
  },
});
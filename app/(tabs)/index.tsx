import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Linking,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <LinearGradient colors={["#0080ff", "#0066ff"]} style={styles.container}>
      <SafeAreaView style={styles.innerContainer}>
        <View style={styles.contentWrapper}>
          <View style={styles.logoContainer}>
            <View style={styles.logo}>
              <Text style={styles.logoText}>S</Text>
            </View>
          </View>

          <Text style={styles.heading}>Welcome to spehre!</Text>
          <Text style={styles.subtext}>
            Find peers, internships, and job opportunities within your college
            community.
          </Text>

          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Create Account</Text>
          </TouchableOpacity>

          <Text style={styles.orText}>OR</Text>

          <Link href="/login" asChild>
            <TouchableOpacity style={styles.secondaryButton}>
              <Text style={styles.secondaryButtonText}>Log In</Text>
            </TouchableOpacity>
          </Link>
        </View>

        <Text style={styles.footerText}>
          By continuing, you agree to Spehre.ios{" "}
          <Text
            style={styles.link}
            onPress={() => Linking.openURL("https://spehre.io/terms")}
          >
            Terms of Service
          </Text>{" "}
          and{" "}
          <Text
            style={styles.link}
            onPress={() => Linking.openURL("https://spehre.io/privacy")}
          >
            Privacy Policy
          </Text>
        </Text>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: "space-between",
    padding: 24,
  },
  contentWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    marginBottom: 32,
  },
  logo: {
    backgroundColor: "#ffffff",
    width: 72,
    height: 72,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },
  logoText: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#007bff",
  },
  heading: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
    marginBottom: 12,
  },
  subtext: {
    color: "#e1e1e1",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 40,
    paddingHorizontal: 10,
  },
  primaryButton: {
    backgroundColor: "#007bff",
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 24,
    marginBottom: 10,
    width: "100%",
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  primaryButtonText: {
    color: "#ffffff",
    fontWeight: "normal",
    fontSize: 18,
  },
  orText: {
    color: "#fff",
    marginBottom: 10,
    fontWeight: "600",
  },
  secondaryButton: {
    backgroundColor: "#f2f2f2",
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 24,
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
    elevation: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
  secondaryButtonText: {
    color: "#000",
    fontWeight: "600",
    fontSize: 16,
  },
  footerText: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 14,
    lineHeight: 18,
    marginTop: "auto",
  },
  link: {
    textDecorationLine: "underline",
    color: "#cce6ff",
  },
});

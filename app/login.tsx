import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Link, router } from "expo-router";

export default function LoginScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  return (
    <LinearGradient
      colors={["#ffffff", "#e0f0ff", "#cce4ff", "#92b6dc"]}
      style={styles.gradient}
    >
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
        >
          {/* Top Bar */}
          <View style={styles.topBar}>
            <TouchableOpacity onPress={() => router.replace("/")}>
              <Ionicons
                name="arrow-back"
                style={styles.arrowIcon}
                size={24}
                color="#007bff"
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.signupButton}>
              <Text style={styles.signupButtonText}>Sign up</Text>
            </TouchableOpacity>
          </View>

          {/* Title and Icon */}
          <Text style={styles.title}>
            Login to your <Text style={styles.titleBold}>account</Text>
          </Text>
          <Image
            source={{
              uri: "https://img.icons8.com/clouds/100/000000/lock--v1.png",
            }}
            style={styles.icon}
          />
          <Text style={styles.subtitle}>
            Enter your credentials to sign in.
          </Text>

          {/* Email Input */}
          <View
            style={[styles.inputContainer, emailFocused && styles.inputFocused]}
          >
            <MaterialIcons
              name="email"
              size={20}
              color={emailFocused ? "#007bff" : "#999"}
              style={styles.inputIcon}
            />
            <TextInput
              placeholder="Email"
              style={styles.input}
              placeholderTextColor="#999"
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
            />
          </View>

          {/* Password Input */}
          <View
            style={[
              styles.inputContainer,
              passwordFocused && styles.inputFocused,
            ]}
          >
            <MaterialIcons
              name="lock"
              size={20}
              color={passwordFocused ? "#007bff" : "#999"}
              style={styles.inputIcon}
            />
            <TextInput
              placeholder="Password"
              secureTextEntry={!showPassword}
              style={styles.input}
              placeholderTextColor="#999"
              onFocus={() => setPasswordFocused(true)}
              onBlur={() => setPasswordFocused(false)}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons
                name={showPassword ? "eye-off" : "eye"}
                size={20}
                color={passwordFocused ? "#007bff" : "#999"}
              />
            </TouchableOpacity>
          </View>

          {/* Forgot Password */}
          <TouchableOpacity style={styles.forgotPassword}>
            <Text
              onPress={() => router.replace("/new-password")}
              style={styles.link}
            >
              Forgot Password?
            </Text>
          </TouchableOpacity>

          {/* Social Login */}
          <Text style={styles.orText}>Or login using</Text>
          <View style={styles.socialContainer}>
            <TouchableOpacity style={styles.socialButton}>
              <Image
                source={{
                  uri: "https://img.icons8.com/color/48/google-logo.png",
                }}
                style={styles.socialIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Image
                source={{
                  uri: "https://img.icons8.com/ios-filled/50/000000/mac-os.png",
                }}
                style={styles.socialIcon}
              />
            </TouchableOpacity>
          </View>

          {/* Bottom Signup */}
          <Text style={styles.bottomText}>
            Don’t have an account? <Text style={styles.link}>sign up?</Text>
          </Text>

          {/* Confirm Button */}
          <TouchableOpacity
            onPress={() => router.replace("/phone-number-screen")}
            style={styles.confirmButton}
          >
            <Text style={styles.confirmText}>Confirm</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  container: {
    padding: 20,
    alignItems: "center",
  },
  topBar: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },

  arrowIcon: {
    borderWidth: 1,
    borderColor: "#007bff",
    padding: 6,
    borderRadius: 999,
  },

  signupButton: {
    borderWidth: 1,
    borderColor: "#007bff",
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 999,
  },

  signupButtonText: {
    color: "#007bff",
    fontWeight: "500",
    fontSize: 16,
  },

  title: {
    fontSize: 28,
    textAlign: "center",
    fontWeight: "400",
    color: "#000",
  },
  titleBold: {
    fontWeight: "700",
  },
  subtitle: {
    color: "#555",
    fontSize: 16,
    textAlign: "center",
    marginVertical: 10,
  },
  icon: {
    width: 60,
    height: 60,
    marginVertical: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginVertical: 10,
    width: "100%",
  },
  inputFocused: {
    borderColor: "#007bff",
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#000",
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginBottom: 20,
  },
  link: {
    color: "#007bff",
    fontWeight: "500",
  },
  orText: {
    marginBottom: 10,
    color: "#333",
  },
  socialContainer: {
    flexDirection: "row",
    gap: 20,
    marginBottom: 20,
  },
  socialButton: {
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 14,
    elevation: 2,
  },
  socialIcon: {
    width: 24,
    height: 24,
  },
  bottomText: {
    color: "#666",
    marginBottom: 20,
  },
  confirmButton: {
    backgroundColor: "#007bff",
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 24,
    width: "100%",
    alignItems: "center",
  },
  confirmText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

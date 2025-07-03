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
        <View style={styles.mainWrapper}>
          <ScrollView
            contentContainerStyle={styles.container}
            keyboardShouldPersistTaps="handled"
          >
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

            <Text style={styles.title}>
              Login to your account{" "}
              <Ionicons
                name="lock-closed"
                size={32}
                color="#007bff"
                style={{ marginBottom: -7 }}
              />
            </Text>

            <Text style={styles.subtitle}>
              Enter your credentials to sign in.
            </Text>

            <View
              style={[
                styles.inputContainer,
                emailFocused && styles.inputFocused,
              ]}
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

            <TouchableOpacity style={styles.forgotPassword}>
              <Text
                onPress={() => router.replace("/new-password")}
                style={styles.link}
              >
                Forgot Password?
              </Text>
            </TouchableOpacity>

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

            <Text style={styles.bottomText}>
              Don’t have an account?{" "}
              <TouchableOpacity>
                <Text style={styles.link}>sign up?</Text>
              </TouchableOpacity>
            </Text>
          </ScrollView>

          <View style={styles.bottomButtonWrapper}>
            <TouchableOpacity
              onPress={() => router.replace("/phone-number-screen")}
              style={styles.confirmButton}
            >
              <Text style={styles.confirmText}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
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
  mainWrapper: {
    flex: 1,
    justifyContent: "space-between",
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
    fontWeight: "700",
    fontSize: 42,
    color: "#333",
    textAlign: "left",
    alignSelf: "stretch",
    lineHeight: 36,
    marginBottom: 10,
  },
  subtitle: {
    color: "#6f6f6f",
    marginLeft: 7,
    textAlign: "left",
    alignSelf: "stretch",
    fontSize: 18,
    lineHeight: 22,
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
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
    marginBottom: 25,
    marginTop: 15,
  },
  socialButton: {
    backgroundColor: "#efefef",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingVertical: 13,
    borderWidth: 1,
    width: "45%",
    borderRadius: 14,
    borderColor: "#c1c1c1",
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
  bottomButtonWrapper: {
    padding: 20,
  },
  confirmButton: {
    backgroundColor: "#007bff",
    borderRadius: 999,
    paddingVertical: 16,
    paddingHorizontal: 50,
    width: "100%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
    marginBottom: 10,
  },
  confirmText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

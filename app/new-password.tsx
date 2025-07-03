import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function NewPasswordScreen() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <ScrollView
          contentContainerStyle={styles.scroll}
          keyboardShouldPersistTaps="handled"
        >
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => router.replace("/login")}
              style={styles.roundButton}
            >
              <Ionicons name="arrow-back" size={20} color="#007bff" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => router.replace("/login")}
              style={styles.loginBtn}
            >
              <Text style={styles.loginText}>Log In</Text>
            </TouchableOpacity>
          </View>

          {/* Lock Icon */}
          <View style={styles.iconWrapper}>
            <View style={styles.starsBox}>
              <Text style={styles.stars}>***</Text>
            </View>
            <Image
              source={{
                uri: "https://img.icons8.com/clouds/100/lock--v1.png",
              }}
              style={styles.lockIcon}
            />
          </View>

          {/* Title & Subtitle */}
          <Text style={styles.title}>Set your{"\n"} password</Text>
          <Text style={styles.subtitle}>
            Create a new password to secure your account.
          </Text>

          {/* New Password Input */}
          <View
            style={[
              styles.passwordInputWrapper,
              focusedIndex === 0 && styles.phoneInputFocused,
            ]}
          >
            <Ionicons name="lock-closed-outline" size={20} color="#333" />
            <TextInput
              placeholder="New password"
              placeholderTextColor="#999"
              secureTextEntry
              value={newPassword}
              onChangeText={setNewPassword}
              onFocus={() => setFocusedIndex(0)}
              onBlur={() => setFocusedIndex(null)}
              style={styles.phoneInput}
            />
            <Ionicons name="eye-off-outline" size={20} color="#999" />
          </View>

          {/* Confirm Password Input */}
          <View
            style={[
              styles.passwordInputWrapper,
              focusedIndex === 1 && styles.phoneInputFocused,
              { marginTop: 20 },
            ]}
          >
            <Ionicons name="lock-closed-outline" size={20} color="#333" />
            <TextInput
              placeholder="Confirm password"
              placeholderTextColor="#999"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              onFocus={() => setFocusedIndex(1)}
              onBlur={() => setFocusedIndex(null)}
              style={styles.phoneInput}
            />
            <Ionicons name="eye-off-outline" size={20} color="#999" />
          </View>
        </ScrollView>

        {/* Confirm Button */}
        <View style={styles.bottomButtonWrapper}>
          <TouchableOpacity
            onPress={() => console.log("Password set")}
            style={styles.confirmButton}
          >
            <Text style={styles.confirmText}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  innerContainer: { flex: 1, justifyContent: "space-between" },
  scroll: { padding: 20, alignItems: "center" },

  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  roundButton: {
    borderWidth: 1,
    borderColor: "#007bff",
    borderRadius: 50,
    padding: 8,
  },
  loginBtn: {
    borderWidth: 1,
    borderColor: "#007bff",
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  loginText: {
    color: "#007bff",
    fontSize: 14,
    fontWeight: "500",
  },
  iconWrapper: {
    alignItems: "center",
    marginBottom: 20,
  },
  starsBox: {
    backgroundColor: "#007bff",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    zIndex: 1,
  },
  stars: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  lockIcon: {
    width: 50,
    height: 50,
    marginTop: -10,
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

  passwordInputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#007bff",
    borderRadius: 14,
    backgroundColor: "#f0f8ff",
    paddingHorizontal: 16,
    height: 60,
    width: "100%",
    gap: 10,
  },
  phoneInputFocused: {
    borderColor: "#007bff",
    backgroundColor: "#e6f2ff",
  },
  phoneInput: {
    flex: 1,
    fontSize: 18,
    color: "#333",
  },

  bottomButtonWrapper: {
    padding: 20,
    backgroundColor: "#fff",
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

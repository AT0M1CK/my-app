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

          {/* Gear + Refresh Icon */}
          <Image
            source={require("../assets/images/gear-icon.png")}
            style={styles.gearIcon}
          />

          {/* Title & Subtitle */}
          <Text style={styles.title}>Choose new{"\n"}password</Text>
          <Text style={styles.subtitle}>Choose a new password to login</Text>

          {/* New Password Input */}
          <View
            style={[
              styles.passwordInputWrapper,
              focusedIndex === 0 && styles.phoneInputFocused,
            ]}
          >
            <Ionicons name="lock-closed-outline" size={20} color="#333" />
            <TextInput
              placeholder="New Password"
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
              placeholder="Confirm Password"
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
            onPress={() => router.replace("/login")}
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
  container: { flex: 1, backgroundColor: "#ffffff" },
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

  gearIcon: {
    width: 70,
    height: 70,
    resizeMode: "contain",
    marginBottom: 10,
  },

  title: {
    fontWeight: "700",
    fontSize: 36,
    color: "#333",
    textAlign: "left",
    alignSelf: "stretch",
    lineHeight: 40,
    marginBottom: 10,
  },
  subtitle: {
    color: "#6f6f6f",
    marginLeft: 4,
    textAlign: "left",
    alignSelf: "stretch",
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 30,
  },

  passwordInputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 14,
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

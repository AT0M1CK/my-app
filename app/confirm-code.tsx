import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link, router } from "expo-router";

export default function ConfirmCodeScreen() {
  const [code, setCode] = useState(["", "", "", ""]);

  const handleInputChange = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text.slice(-1); // Only last char
    setCode(newCode);
    // Auto-focus next input (optional)
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* <Link href="/(tabs)/index" asChild> */}
        <TouchableOpacity
          onPress={() => router.replace("/")}
          style={styles.roundButton}
        >
          <Ionicons name="arrow-back" size={20} color="#007bff" />
        </TouchableOpacity>
        {/* </Link> */}
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Log In</Text>
        </TouchableOpacity>
      </View>

      {/* Lock Icon with stars */}
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

      {/* Title and Subtitle */}
      <Text style={styles.title}>
        Confirm your <Text style={styles.titleBold}>number</Text>
      </Text>
      <Text style={styles.subtitle}>
        Enter the code we sent to the number ending with 0957
      </Text>

      {/* Code Inputs */}
      <View style={styles.codeContainer}>
        {code.map((digit, idx) => (
          <TextInput
            key={idx}
            style={styles.codeInput}
            keyboardType="number-pad"
            maxLength={1}
            value={digit}
            onChangeText={(text) => handleInputChange(text, idx)}
          />
        ))}
      </View>

      {/* Confirm Button */}
      <TouchableOpacity style={styles.confirmButton}>
        <Text style={styles.confirmText}>Confirm</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    alignItems: "center",
  },
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
    fontSize: 24,
    fontWeight: "400",
    color: "#333",
    textAlign: "center",
    marginBottom: 10,
  },
  titleBold: {
    fontWeight: "700",
  },
  subtitle: {
    color: "#999",
    textAlign: "center",
    marginBottom: 30,
  },
  codeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 40,
  },
  codeInput: {
    borderWidth: 1,
    borderColor: "#007bff",
    borderRadius: 20,
    width: 55,
    height: 55,
    textAlign: "center",
    fontSize: 18,
    color: "#333",
    backgroundColor: "#f9f9f9",
  },
  confirmButton: {
    backgroundColor: "#007bff",
    borderRadius: 999,
    paddingVertical: 14,
    paddingHorizontal: 50,
    width: "100%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  confirmText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

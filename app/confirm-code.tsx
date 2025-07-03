import React, { useState, useRef } from "react";
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

export default function ConfirmCodeScreen() {
  const [code, setCode] = useState(["", "", "", ""]);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const inputsRef = useRef<Array<TextInput | null>>([]);

  const handleInputChange = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text.slice(-1);
    setCode(newCode);
    if (text && index < 3) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleBackspace = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace" && !code[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

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
              onPress={() => router.replace("/")}
              style={styles.roundButton}
            >
              <Ionicons name="arrow-back" size={20} color="#007bff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtn}>
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

          {/* Title */}
          <Text style={styles.title}> Confirm your{"\n"} number</Text>
          <Text style={styles.subtitle}>
            Enter the code we sent to the number {"\n"}ending with 0957
          </Text>

          {/* OTP Inputs */}
          <View style={styles.codeContainer}>
            {code.map((digit, idx) => (
              <View key={idx} style={styles.codeWrapper}>
                <TextInput
                  ref={(ref) => {
                    inputsRef.current[idx] = ref;
                  }}
                  value={digit}
                  onChangeText={(text) => handleInputChange(text, idx)}
                  onKeyPress={(e) => handleBackspace(e, idx)}
                  keyboardType="number-pad"
                  maxLength={1}
                  caretHidden={true}
                  onFocus={() => setFocusedIndex(idx)}
                  onBlur={() => setFocusedIndex(null)}
                  style={[
                    styles.codeInput,
                    focusedIndex === idx && styles.codeInputFocused,
                  ]}
                />
                {focusedIndex === idx && <View style={styles.fakeCaret} />}
              </View>
            ))}
          </View>
        </ScrollView>

        {/* Confirm Button (fixed at bottom) */}
        <View style={styles.bottomButtonWrapper}>
          <TouchableOpacity style={styles.confirmButton}>
            <Text style={styles.confirmText}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  innerContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  scroll: {
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
  codeContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    marginBottom: 40,
  },
  codeWrapper: {
    position: "relative",
    flex: 1,
    alignItems: "center",
    maxWidth: 80,
    marginHorizontal: 6,
  },

  codeInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 30,
    width: "100%",
    height: 58,
    textAlign: "center",
    fontSize: 22,
    color: "#333",
    backgroundColor: "#f9f9f9",
    maxWidth: 70,
    minWidth: 60,
    shadowColor: "#505050",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },

  codeInputFocused: {
    borderColor: "#007bff",
  },
  fakeCaret: {
    position: "absolute",
    bottom: 12,
    left: "50%",
    transform: [{ translateX: -8 }],
    width: 16,
    height: 2,
    backgroundColor: "#757576",
  },
  bottomButtonWrapper: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 50,
    backgroundColor: "#fff",
  },

  confirmButton: {
    backgroundColor: "#007bff",
    borderRadius: 999,
    paddingVertical: 18,
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

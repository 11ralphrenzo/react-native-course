import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import React from "react";

function SampleScreen() {
  return (
    <ThemedView>
      <ThemedText type="title">Welcome!</ThemedText>
    </ThemedView>
  );
}

export default SampleScreen;

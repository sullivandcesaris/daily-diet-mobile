import React, { useState } from "react";
import { TextInput, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Container, Label, StyledInput } from "./style";

interface InputDateTimeProps {
  label: string;
  type?: "date" | "time"; // Definindo os tipos suportados
  size?: "lg" | "md" | "sm" | "auto";
}

export const InputDateTime: React.FC<InputDateTimeProps> = ({
  label,
  type = "date",
  size = "lg",
}) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };

  const showPicker = () => {
    setShow(true);
  };

  const pickerMode = type === "date" ? "date" : "time"; // Determinando o modo do picker

  return (
    <Container size={size}>
      <Label>{label}</Label>
      <TouchableOpacity onPress={showPicker}>
        <StyledInput
          value={
            type === "date"
              ? date.toLocaleDateString()
              : date.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: false,
                })
          } // Mostrando data ou hora conforme o tipo
          editable={false}
          style={{
            paddingVertical: 10,
            paddingHorizontal: 15,
            borderColor: "#ccc",
            borderWidth: 1,
            borderRadius: 5,
          }}
        />
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={pickerMode}
          display="spinner"
          is24Hour={type === "time"} // Configuração para 24 horas apenas quando o tipo for "time"
          onChange={onChange}
        />
      )}
    </Container>
  );
};

export default InputDateTime;

import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "@rneui/base";

const PantallaInicio = ({ navigation }) => {
  state = {
    usuario: "",
    contrasena: "",
  };
  navigationOptions = {
    header: null,
  };

  const login = () => {
    if (!!this.state.usuario && !!this.state.contrasena) {
      fetch(
        `localhost/api/apiusuario.php?comando=autenticar&usuario=${this.state.usuario}&contrasena=${this.state.contrasena}`,
        {
          method: "GET",
        }
      )
        .then((response) => response.json())
        .then((result) => {
          const found = result.encontrado;
          if (found === "si") {
            navigation.navigate("ListarProductos");
          } else {
            Alert.alert(
              "Usuario",
              "No encontrado",
              [{ text: "OK", onPress: () => console.log("OK Pressed") }],
              { cancelable: false }
            );
          }
        })
        .catch((error) => {
          Alert.alert(
            "Aviso",
            "Error de internet",
            [{ text: "OK", onPress: () => console.log("OK Pressed") }],
            { cancelable: false }
          );
        });
    } else {
      Alert.alert(
        "Aviso",
        "No introdujo datos",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
    }
  };

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Text style={{ fontSize: 34, marginTop: 25, alignSelf: "center" }}>
        Bienvenidos
      </Text>
      <Image
        style={{ width: 200, height: 160, alignSelf: "center", marginTop: 15 }}
        source={require("./imagenes/market.jpg")}
      />

      <View style={{ marginLeft: 10, marginRight: 10 }}>
        <Input
          placeholder="USUARIO"
          onChangeText={(text) => this.setState({ usuario: text })}
          rightIcon={<Icon name="user" size={24} color="black" />}
        />

        <Input
          placeholder="CONTRASEÑA"
          onChangeText={(text) => this.setState({ contrasena: text })}
          secureTextEntry={true}
          rightIcon={<Icon name="lock" size={24} color="black" />}
        />
      </View>

      <TouchableOpacity
        style={{
          height: 50,
          backgroundColor: "red",
          marginTop: 15,
          borderRadius: 5,
          justifyContent: "center",
          marginLeft: 20,
          marginRight: 20,
        }}
        onPress={() => {
          this.login();
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 22,
            textAlign: "center",
            textAlignVertical: "center",
          }}
        >
          Entrar
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PantallaInicio;

const styles = StyleSheet.create({});

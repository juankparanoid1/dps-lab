import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Input } from "@rneui/base";

const PaginaAgregar = () => {
  state = {
    nombre: "",
    descripcion: "",
    preciodeventa: "",
    preciodecosto: "",
    cantidad: "",
    fotografia: "",
  };
  navigationOptions = {
    title: "Agregar producto",
    headerStyle: {
      backgroundColor: "#f4511e",
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
    },
  };

  const saveProduct = () => {
    fetch(
      `localhost/api/api.php?comando=editar&nombre=${state.nombre}&descripcion=${state.descripcion}&cantidad=${state.cantidad}
            &preciodecosto=${state.preciodecosto}
            &preciodeventa=${state.preciodeventa}
            &fotografia=${state.fotografia}
            &id=${state.id}`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        const mensaje = result.mensaje;
        console.log(mensaje);
        if (!mensaje) alert("Error al agregar!");
        else {
          alert(mensaje);
          navigation.goBack();
        }
      })
      .catch((error) => {
        console.error(error);
        alert("Error de Internet!!");
      });
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Input
        placeholder="Nombre"
        onChangeText={(text) => this.setState({ nombre: text })}
      />{" "}
      <Input
        inputStyle={{ marginTop: 10 }}
        placeholder="Descripción"
        onChangeText={(text) => this.setState({ descripcion: text })}
      />
      <Input
        inputStyle={{ marginTop: 10 }}
        placeholder="Precio de costo"
        onChangeText={(text) => this.setState({ preciodecosto: text })}
      />
      <Input
        inputStyle={{ marginTop: 10 }}
        placeholder="Precio de venta"
        onChangeText={(text) => this.setState({ preciodeventa: text })}
      />
      <Input
        inputStyle={{ marginTop: 10 }}
        placeholder="Cantidad"
        onChangeText={(text) => this.setState({ cantidad: text })}
      />
      <Input
        inputStyle={{ marginTop: 10 }}
        placeholder="URL de fotografía"
        onChangeText={(text) => this.setState({ fotografia: text })}
      />
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
          this.Guardar();
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
          Guardar
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaginaAgregar;

const styles = StyleSheet.create({});

import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import { Input } from "@rneui/base";

const PaginaDetalle = ({ navigation }) => {
  state = {
    nombre: "",
    descripcion: "",
    cantidad: "",
    preciodecosto: "",
    preciodeventa: "",
    fotografia: "",
    id: "",
  };
  navigationOptions = {
    title: "Editar producto",
    headerStyle: {
      backgroundColor: "#f4511e",
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
    },
  };

  const updateProduct = () => {
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
        if (!mensaje) alert("Error al actualizar!");
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

  const deleteProduct = () => {
    fetch(
      `https://marketudb.000webhostapp.com/api.php?comando=eliminar&id=${state.id}`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        const mensaje = result.mensaje;
        console.log(mensaje);
        if (!mensaje) alert("Error al eliminar!");
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

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      console.log("Entro aqui" + navigation.getParam("nombre"));
      setState({
        nombre: navigation.getParam("nombre"),
        descripcion: navigation.getParam("descripcion"),
        cantidad: navigation.getParam("cantidad"),
        preciodecosto: navigation.getParam("preciodecosto"),
        preciodeventa: navigation.getParam("preciodeventa"),
        fotografia: navigation.getParam("fotografia"),
        id: navigation.getParam("id"),
      });
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignContent: "center",
            alignItems: "center",
            height: 60,
          }}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              height: 40,
              backgroundColor: "black",
              borderRadius: 5,
              justifyContent: "center",
              marginLeft: 5,
            }}
            onPress={() => {
                updateProduct();
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 22,
                textAlign: "center",
                textAlignVertical: "center",
                padding: 3,
              }}
            >
              Actualizar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              height: 40,
              backgroundColor: "black",
              borderRadius: 5,
              justifyContent: "center",
              marginLeft: 5,
              marginRight: 5,
            }}
            onPress={() => {
                deleteProduct();
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 22,
                textAlign: "center",
                textAlignVertical: "center",
                padding: 3,
              }}
            >
              Eliminar
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1, padding: 20 }}>
          <Input
            label="Nombre"
            value={state.nombre}
            placeholder="Nombre"
            onChangeText={(text) => setState({ nombre: text })}
          />
          <Input
            label="Descripción"
            value={state.descripcion}
            inputStyle={{ marginTop: 10 }}
            placeholder="Descripción"
            onChangeText={(text) => setState({ descripcion: text })}
          />
          <Input
            label="Precio de costo"
            value={state.preciodecosto}
            inputStyle={{ marginTop: 10 }}
            placeholder="Precio de costo"
            onChangeText={(text) => setState({ preciodecosto: text })}
          />
          <Input
            label="Precio de venta"
            value={state.preciodeventa}
            inputStyle={{ marginTop: 10 }}
            placeholder="Precio de venta"
            onChangeText={(text) => setState({ preciodeventa: text })}
          />
          <Input
            label="Cantidad"
            value={state.cantidad}
            inputStyle={{ marginTop: 10 }}
            placeholder="Cantidad"
            onChangeText={(text) => setState({ cantidad: text })}
          />
          <Input
            label="Fotografía"
            value={state.fotografia}
            inputStyle={{ marginTop: 10 }}
            placeholder="URL de fotografía"
            onChangeText={(text) => setState({ fotografia: text })}
          />
          <Image />
        </View>
      </ScrollView>
    </View>
  );
};

export default PaginaDetalle;

const styles = StyleSheet.create({});

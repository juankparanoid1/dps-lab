import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from "react-native";
  import React from "react";
  
  const ListarProductos = ({ navigation }) => {
    state = {
      elementos: [],
      total: 0,
    };
    navigationOptions = {
      title: "Productos",
      headerStyle: {
        backgroundColor: "#f4511e",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    };
  
    const loadProducts = () => {
      fetch("localhost/api/api.php?comando=listar", {
        method: "GET",
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          const listado = result.records;
          console.log(listado);
          this.setState({
            elementos: listado,
            total: listado.length,
          });
        })
        .catch((error) => {
          console.error(error);
        });
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            loadProducts();
        });
        return unsubscribe;
      }, [navigation]);
  
    return (
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontSize: 18,
            textAlign: "center",
            height: 40,
            marginTop: 10,
            backgroundColor: "lightgray",
            textAlignVertical: "center",
            borderRadius: 10,
            marginLeft: 10,
            marginRight: 10,
          }}
        >
          {this.state.total} productos
        </Text>
  
        <FlatList
          data={this.state.elementos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => navigation.navigate("Detalles", item)}
            >
              <View
                style={{ flexDirection: "row", marginTop: 15, marginLeft: 2 }}
              >
                <Image
                  style={{ width: 90, height: 90 }}
                  source={{ uri: item.fotografia }}
                />
                <View style={{ height: 80, marginLeft: 5 }}>
                  <Text style={{ flex: 1, fontSize: 18 }}>{item.nombre}</Text>
                  <Text style={{ flex: 1, fontSize: 16, fontWeight: "bold" }}>
                    ${item.preciodeventa}
                  </Text>
                  <Text style={{ flex: 1, fontSize: 14 }}>
                    Existencia {item.cantidad}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        ></FlatList>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: "rgba(0,0,0,0.2)",
            alignItems: "center",
            justifyContent: "center",
            width: 70,
            position: "absolute",
            bottom: 10,
            right: 10,
            height: 70,
            backgroundColor: "red",
            borderRadius: 100,
          }}
          onPress={() => navigation.navigate("Agregar")}
        >
          <Icon name="plus" size={30} color="white" />
        </TouchableOpacity>
      </View>
    );
  };
  
  export default ListarProductos;
  
  const styles = StyleSheet.create({});
  
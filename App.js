import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

/* Crear una variable y asignarle una imagen */
const logo_unitec1 = require("./assets/logo_unitec1.jpg");
const hobbies = require("./assets/hobbies.jpg");
const frontend_backend = require("./assets/frontend_backend.webp");

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={logo_unitec1}
        style={{
          width: 100,
          height: 100,
        }}
      ></Image>
      <Text style={{ color: "rgb(7, 53, 179)", fontWeight: "bold" }}>
        Nombre:
      </Text>
      <Text style={{ color: "rgb(7, 53, 179)", fontWeight: "bold" }}>
        Karen Patricia Alvarez
      </Text>
      <Text> </Text>
      <Text style={{ color: "rgb(7, 53, 179)", fontWeight: "bold" }}>
        Número de cuenta estudiantil:
      </Text>
      <Text style={{ color: "rgb(7, 53, 179)", fontWeight: "bold" }}>
        C12515502
      </Text>
      <Text> </Text>
      <Text style={{ color: "rgb(7, 53, 179)", fontWeight: "bold" }}>
        Carrera:
      </Text>
      <Text style={{ color: "rgb(7, 53, 179)", fontWeight: "bold" }}>
        Certificado en Desarrollo y Diseño Web
      </Text>
      <Text> </Text>
      <Text style={{ color: "rgb(7, 53, 179)", fontWeight: "bold" }}>
        Hobbies o intereses:
      </Text>
      <Image source={hobbies} style={{ width: 100, height: 100 }}></Image>
      <Text style={{ color: "rgb(7, 53, 179)", fontWeight: "bold" }}>
        Escuchar musica
      </Text>
      <Text style={{ color: "rgb(7, 53, 179)", fontWeight: "bold" }}>
        Ver Televisión
      </Text>
      <Text style={{ color: "rgb(7, 53, 179)", fontWeight: "bold" }}>
        Salir a correr
      </Text>
      <Text style={{ color: "rgb(7, 53, 179)", fontWeight: "bold" }}>
        Hacer ejercicio
      </Text>
      <Text> </Text>
      <Text style={{ color: "rgb(7, 53, 179)", fontWeight: "bold" }}>
        Experiencia referentes al Certificado:
      </Text>
      <Image
        source={frontend_backend}
        style={{ width: 100, height: 100 }}
      ></Image>
      <Text style={{ color: "rgb(7, 53, 179)", fontWeight: "bold" }}>
        Aprender a utilizar HTML
      </Text>
      <Text style={{ color: "rgb(7, 53, 179)", fontWeight: "bold" }}>
        Aprender a utilizar CSS
      </Text>
      <Text style={{ color: "rgb(7, 53, 179)", fontWeight: "bold" }}>
        Aprender a utilizar JavaScript
      </Text>
      <Text style={{ color: "rgb(7, 53, 179)", fontWeight: "bold" }}>
        Aprender a utilizar Framework React
      </Text>
      <Text style={{ color: "rgb(7, 53, 179)", fontWeight: "bold" }}>
        Aprender a utilizar Framework React Native
      </Text>
      <Text style={{ color: "rgb(7, 53, 179)", fontWeight: "bold" }}>
        Aprender a utilizar Figma
      </Text>
      <Text style={{ color: "rgb(7, 53, 179)", fontWeight: "bold" }}>
        Aprender a utilizar Git
      </Text>
      <Text style={{ color: "rgb(7, 53, 179)", fontWeight: "bold" }}>
        Aprender a utilizar GitHub
      </Text>
      <Text style={{ color: "rgb(7, 53, 179)", fontWeight: "bold" }}>
        Aprender a utilizar Visual Studio Code
      </Text>
      <Text style={{ color: "rgb(7, 53, 179)", fontWeight: "bold" }}>
        Aprender a implementar Bases de datos en BackEnd
      </Text>
      <Text style={{ color: "rgb(7, 53, 179)", fontWeight: "bold" }}>
        Aprender a implementar formularios en FrontEnd
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(193, 254, 200)",
    alignItems: "center",
    justifyContent: "flex-start",
    color: "rgb(7, 53, 179)",
  },
});

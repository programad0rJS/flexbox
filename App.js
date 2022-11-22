import { StyleSheet, Text, View, StatusBar, Image, ScrollView } from 'react-native';

export default function App() {


  return (
    <ScrollView>
      <StatusBar barStyle='light-content' />
      
      {/* ScrollView = Para Hacer Un Scroll   */}
      {/* StatusBar = Manipulacion Oea Tener Control, la barra de estado de la aplicación . La barra de estado es la zona, generalmente en la parte superior de la pantalla, que muestra la hora actual, la información de la red Wi-Fi y celular, el nivel de la batería y/u otros íconos de estado.*/}
      {/* View = Contenedor  */}
      {/* Image = Mostrar Imagen */}
      <View style={{ flexDirection: 'row' }}>
        <Image
          style={styles.banner}
          source={require('./assets/img/bg.jpg')}

        />
      </View>

      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Que hacer en Paris</Text>

        <ScrollView
          horizontal
          // horizontal = los elementos secundarios de la vista de desplazamiento se organizan horizontalmente en una fila en lugar de verticalmente en una columna.

        >
          <View>
            <Image
              style={styles.ciudad}
              source={require('./assets/img/actividad1.jpg')}

            />
          </View>

          <View>
            <Image
              style={styles.ciudad}
              source={require('./assets/img/actividad2.jpg')}

            />
          </View>


          <View>
            <Image
              style={styles.ciudad}
              source={require('./assets/img/actividad3.jpg')} 

            />
          </View>


          <View>
            <Image
              style={styles.ciudad}
              source={require('./assets/img/actividad4.jpg')}

            />
          </View>

          <View>
            <Image
              style={styles.ciudad}
              source={require('./assets/img/actividad5.jpg')}

            />
          </View>


        </ScrollView>

        <Text style={styles.titulo}>Los Mejores Alojamientos</Text>
        <View>

          <View>
            <Image
              style={styles.mejores}
              source={require('./assets/img/mejores1.jpg')}

            />
          </View>
          <View>
            <Image
              style={styles.mejores}
              source={require('./assets/img/mejores2.jpg')}

            />
          </View>

          <View>
            <Image
              style={styles.mejores}
              source={require('./assets/img/mejores3.jpg')}

            />
          </View>
        </View>


        <Text style={styles.titulo}>Hospedajes en LA</Text>
        <View style={styles.listado}>
          <View style={styles.listadoItem}>
            <Image
              style={styles.mejores}
              source={require('./assets/img/hospedaje1.jpg')}

            />
          </View>
          <View style={styles.listadoItem}>
            <Image
              style={styles.mejores}
              source={require('./assets/img/hospedaje2.jpg')}

            />
          </View>

          <View style={styles.listadoItem}>
            <Image
              style={styles.mejores}
              source={require('./assets/img/hospedaje3.jpg')}

            />
          </View>

          <View style={styles.listadoItem}>
            <Image
              style={styles.mejores}
              source={require('./assets/img/hospedaje4.jpg')}

            />
          </View>
        </View>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 20
  },
  contenedor: {
    marginHorizontal: 10
  },
  ciudad: {
    height: 300,
    width: 250,
    marginRight: 10
  },
  mejores: {
    width: '100%',
    height: 200,
    marginVertical: 5
  },
  listado: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  listadoItem: {
    flexBasis: '50%',

  }
});

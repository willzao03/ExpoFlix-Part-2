import { MovieCard } from "@/components/movieCard";
import { getPopularMovies } from "@/services/movie";
import { Movie } from "@/types/movie.type";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Dashboard() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPopularMovies()
      .then(setMovies)
      .finally(() => setLoading(false));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Filmes</Text>
      {loading ? (
        <ActivityIndicator color="#fff" size="large" />
      ) : (
        <FlatList
          data={movies}
          renderItem={({ item }) => <MovieCard item={item} />}
          keyExtractor={(item) => String(item.id)}
        />
      )}
      <StatusBar style="auto" hidden />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#19244B",
    padding: 8,
  },
  title: {
    color: "white",
    fontSize: 20,
    marginBottom: 30,
  },
});

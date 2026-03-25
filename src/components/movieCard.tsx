import { Movie } from "@/types/movie.type";
import { View, Text, StyleSheet, Image } from "react-native";

type Props = {
  item: Movie;
};

const IMAGE_BASE = "https://image.tmdb.org/t/p/w200";

export const MovieCard = ({ item }: Props) => {
  return (
    <View style={styles.card}>
      <Image
        src={`${IMAGE_BASE}${item.poster_path}`}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.info}>
        <Text style={styles.titleMovie}>{item.title}</Text>
        <Text style={styles.description} numberOfLines={3}>{item.overview}</Text>
        <Text style={styles.meta}>Lang: {item.original_language}</Text>
        <View style={styles.rank}>
          <Text style={styles.meta}>Rank:</Text>
          <Text style={{ color: "yellow" }}>{item.vote_average}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: "#5C668B",
    marginBottom: 8,
    borderRadius: 8,
    padding: 8,
    flexDirection: "row",
    gap: 8,
  },
  info: {
    flex: 1,
  },
  titleMovie: {
    fontWeight: "500",
    fontSize: 16,
    color: "#fff",
    marginBottom: 4,
  },
  description: {
    color: "#ccc",
    fontSize: 12,
    marginBottom: 4,
  },
  meta: {
    color: "#ccc",
    fontSize: 12,
  },
  image: {
    width: 80,
    height: 110,
    borderRadius: 4,
  },
  rank: {
    flexDirection: "row",
    gap: 4,
  },
});

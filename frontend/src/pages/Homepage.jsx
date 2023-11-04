import { VStack, Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Books from "../components/Books";
import { getAllBooks } from "../modules/fetch";
 

export default function Homepage() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      const books = await getAllBooks();
      setBooks(books);
    };
    fetchBooks();
  }, []);

  return (
    <VStack w="100vw">
      <Box
        bgGradient="linear(to-l, grey, grey)"
        color="white"
        p={4}
        borderRadius="md"
        textAlign="center"
      >
        <Text fontSize="xxl">
          "Ilmu pengetahuan tanpa agama lumpuh, agama tanpa ilmu pengetahuan buta." - Albert Einstein
        </Text>
      </Box>
      {books?.books?.map((book) => (
        <Books key={`${book.id} ${book.title}`} {...book} />
      ))}
    </VStack>
  );
}

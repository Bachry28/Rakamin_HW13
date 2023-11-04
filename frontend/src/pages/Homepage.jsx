import { VStack, Box, Text, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Books from "../components/Books";
import { getAllBooks } from "../modules/fetch";

export default function Homepage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const data = await getAllBooks();
      setBooks(data?.books || []); // Ensure data is available and use the correct property
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
        <Text fontSize="l"> 
          "Ilmu pengetahuan tanpa agama lumpuh, agama tanpa ilmu pengetahuan buta." - Albert Einstein
        </Text>
      </Box>
      
      <text as= 'u' fontSize="xl" fontWeight="bold">List Of Library</text>
      <Flex flexWrap="wrap" justify="space-around">
        {books.map((book) => ( // Use the 'books' array directly
          <Books key={book.id} {...book} />
        ))}
      </Flex>
    </VStack>
  );
}

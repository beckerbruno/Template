import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// import { collection, addDoc } from "firebase/firestore";
// import { db } from "./firebaseConfig";

// const addProduct = async () => {
//   try {
//     const docRef = await addDoc(collection(db, "products"), {
//       name: "Produto Exemplo",
//       price: 100,
//       inStock: true,
//     });
//     console.log("Documento adicionado com ID:", docRef.id);
//   } catch (error) {
//     console.error("Erro ao adicionar documento:", error);
//   }
// };

// import { collection, getDocs } from "firebase/firestore";
// import { db } from "./firebaseConfig";

// const fetchProducts = async () => {
//   try {
//     const querySnapshot = await getDocs(collection(db, "products"));
//     querySnapshot.forEach((doc) => {
//       console.log(`${doc.id} =>`, doc.data());
//     });
//   } catch (error) {
//     console.error("Erro ao buscar documentos:", error);
//   }
// };

// {
//   "compilerOptions": {
//     "target": "ES6",
//     "module": "ES6",
//     "moduleResolution": "Node",
//     "strict": true,
//     "esModuleInterop": true
//   }
// }

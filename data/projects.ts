import { repositories } from "./profile";
export type CaseStudySection = {
  title: string;
  content: string;
  placeholder?: boolean;
};
export type Project = {
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  status: string | null;
  github: string | null;
  demo?: string | null;
  visual: "network" | "pixels" | "tree" | "graph";
  image?: string;
  featured: boolean;
  year: number | null;
  domain: string;
  sections: CaseStudySection[];
};
export const projects: Project[] = [
  {
    slug: "c-ml",
    title: "C Machine Learning Library",
    tagline: "Machine learning, closer to the metal.",
    shortDescription:
      "MLC: matrices, regression, and feed-forward neural networks, implemented from scratch in C.",
    fullDescription:
      "MLC is a completed C11 learning project covering matrix operations, dataset preparation, linear and logistic regression, and configurable dense neural networks. It uses the C standard and math libraries rather than an external ML framework, with end-to-end XOR and Iris training workflows in the test suite.",
    technologies: ["C", "Machine Learning", "Numerical Computing"],
    status: "Completed",
    ...repositories["c-ml"],
    visual: "network",
    featured: true,
    year: null,
    domain: "Machine learning",
    sections: [
      {
        title: "Motivation",
        content:
          "Building the underlying pieces is a way to see what an abstraction hides: how numerical operations fit together and how training mechanisms translate into code.",
      },
      {
        title: "How it works",
        content:
          "Rows represent samples and columns represent features or outputs. Each dense layer computes XW + b, then applies its activation. Training runs a forward pass, evaluates a loss gradient, and propagates it backward through the layers before updating weights and biases with full-batch gradient descent. CSV loading, paired shuffling, train/test splitting, and standard scaling support the data pipeline.",
      },
      {
        title: "Architecture",
        content:
          "Public APIs live under include/mlc, with implementations in src. Matrix and dataset modules support the regression models; activation, loss, and dense-layer modules compose into the network API. CMake builds a static library, and CTest registers separate suites for the eight main modules. Fallible operations return MLCStatus codes, and callers release owned objects through matching free functions.",
      },
      {
        title: "Implementation decisions",
        content:
          "Matrices store double-precision values on the heap. Dense layers use seeded Xavier-uniform weights and zero biases for repeatable initialization. The loss supplies the averaging factor, so dense-layer backpropagation does not average gradients again. In the Iris workflow, the scaler is fitted only on training data, then reused on both partitions to avoid leaking test-set statistics.",
      },
      {
        title: "Challenges",
        content:
          "The engineering constraints include keeping matrix shapes consistent across forward and backward passes, managing temporary allocations, and rejecting invalid arguments or malformed data. Tests inspect gradient calculations, exact parameter updates, seeded behavior, and end-to-end training. The completed scope is deliberately bounded: dense networks and full-batch training, without mini-batches, convolutional layers, or model serialization.",
      },
      {
        title: "What I learned",
        content:
          "Implementing the training pipeline makes the relationship between the chain rule, matrix dimensions, and parameter updates concrete. It also connects numerical code with API design: ownership, error reporting, and reproducibility are part of making the mathematics usable. XOR and Iris provide small, understandable ways to exercise the complete pipeline rather than checking each operation only in isolation.",
      },
    ],
  },
  {
    slug: "image-processing",
    title: "Grayscale Image Processing Library",
    tagline: "A closer look at every pixel.",
    shortDescription:
      "GrayLib: grayscale image storage, filters, PGM files, and drawing primitives in C++17.",
    fullDescription:
      "GrayLib is a dependency-free C++17 library for single-channel, 8-bit images. It implements pixel storage, ASCII and binary PGM I/O, image arithmetic, region-of-interest extraction, point transformations, convolution filters, and drawing primitives without relying on OpenCV.",
    technologies: ["C++", "Image Processing", "Object-Oriented Programming"],
    status: null,
    ...repositories["image-processing"],
    visual: "pixels",
    featured: false,
    year: null,
    domain: "Image processing",
    sections: [
      {
        title: "Motivation",
        content:
          "Keeping image storage and processing in the project itself makes the underlying work visible: how pixels are owned, how a file becomes an image, and how local numerical operations change that image. Grayscale data keeps the scope focused while still exposing the main ideas behind filtering and transformation.",
      },
      {
        title: "How it works",
        content:
          "An Image can be created in memory or loaded from a PGM file. Processors return transformed images through a shared ImageProcessor interface. Available operations include brightness and contrast adjustment, gamma correction, mean and Gaussian blur, and horizontal or vertical Sobel filtering. Drawing utilities add lines, rectangles, and circles; results can be saved as P2 or P5 PGM files.",
      },
      {
        title: "Architecture",
        content:
          "Public headers under include/imgproc separate Image, Geometry, Processing, and Draw. Implementations in src handle storage and file I/O, transformations, and drawing. The examples program generates synthetic images and processed outputs. A dependency-free test executable covers the library, with CMake and a GitHub Actions workflow providing the build and test structure.",
      },
      {
        title: "Implementation decisions",
        content:
          "Image owns its heap-allocated pixels and implements deep-copy and move semantics. Arithmetic saturates within the 0–255 range, while checked pixel access catches invalid coordinates. Odd-sized convolution kernels support either zero padding or extended borders. The polymorphic processing interface lets operations be selected through one API, while the implementation remains a straightforward single-threaded CPU approach.",
      },
      {
        title: "Challenges",
        content:
          "Image boundaries, pixel-range limits, and object lifetimes all need explicit behavior. The library addresses them with border modes, clamped output values, clipped drawing, and defined copy/move ownership. Tests cover those contracts alongside region extraction and both PGM encodings. Color images, broad codec support, and large-image optimization remain outside the project's intended scope.",
      },
      {
        title: "What I learned",
        content:
          "An image-processing algorithm is only part of a useful library. Storage, copying, bounds, and file parsing determine whether it behaves predictably. Implementing filters and drawing primitives also connects the mathematics to individual pixels, while a common processing interface shows how object-oriented design can organize operations without hiding their implementation.",
      },
    ],
  },
  {
    slug: "huffman",
    title: "Huffman Encoder / Decoder",
    tagline: "Structure behind compression.",
    shortDescription:
      "HuffZip: lossless file compression with a Huffman tree, bit packing, and a matching decoder.",
    fullDescription:
      "HuffZip is a pair of C++ command-line programs for lossless compression and decompression of text or binary files. It builds a frequency-based Huffman tree, stores enough information to reconstruct it, and verifies restored data with automated byte-for-byte round-trip tests.",
    technologies: ["C++", "Compression", "Algorithms", "Data Structures"],
    status: null,
    ...repositories.huffman,
    visual: "tree",
    featured: false,
    year: null,
    domain: "Algorithms",
    sections: [
      {
        title: "Motivation",
        content:
          "The project began as a first-year university assignment about trees, priority queues, binary files, and bitwise operations. Building both an encoder and a decoder connects the algorithm to a complete file format: a compact representation is only useful if the original bytes can be recovered exactly.",
      },
      {
        title: "How it works",
        content:
          "The encoder counts byte frequencies in a 256-entry histogram, then repeatedly combines the two least frequent nodes using a priority queue. Tree paths become variable-length bit codes. The output contains a signature, tree size, original file size, a serialized tree, and packed data bits. The decoder reconstructs the tree and follows those bits to recover the original bytes.",
      },
      {
        title: "Architecture",
        content:
          "Separate ENCODER_app and DECODER_app entry points share Node, Code, and HuffmanTree classes. Node represents the tree structure, Code manages bit sequences, and HuffmanTree builds the tree, generates the lookup table, and handles reconstruction. CMake produces huffman_encode and huffman_decode; a Python test runner exercises both executables through CTest.",
      },
      {
        title: "Implementation decisions",
        content:
          "The tree is serialized in post-order: a leaf marker is followed by its byte value, while an interior marker joins two subtrees. This lets the decoder rebuild the structure with a stack. Storing the original size distinguishes useful data from padding in the final byte. Input is loaded into memory before encoding, keeping the implementation simple at the cost of memory scaling with file size.",
      },
      {
        title: "Challenges",
        content:
          "A lossless codec must handle more than ordinary text. Tests cover empty input, repeated bytes, all 256 byte values, deterministic binary data, and bytes that match the tree markers. Invalid signatures and truncated payloads are rejected, and tree reconstruction validates marker structure before building nodes. Correctness is checked by comparing decoded output directly with the original bytes.",
      },
      {
        title: "What I learned",
        content:
          "The tree algorithm and the binary format have to agree at every boundary: symbol values, bit order, tree structure, and end-of-file handling. Building the full round trip connects abstract data structures to practical serialization. It also makes clear why automated tests need unusual byte patterns and malformed files, not just a successful example with readable text.",
      },
    ],
  },
  {
    slug: "adt-graph",
    title: "Graph ADT & Algorithms",
    tagline: "Connections, explored from first principles.",
    shortDescription:
      "ADTGraph: a Python graph abstract data type with traversals, shortest paths, and structural algorithms.",
    fullDescription:
      "ADTGraph is a first-year Python project implementing directed and undirected graphs, with optional edge weights and handwritten graph algorithms. It combines a mutable graph API, BFS and DFS iterators, text-file storage, and automated tests using only the Python standard library.",
    technologies: ["Python", "Graph Algorithms", "Data Structures"],
    status: null,
    ...repositories["adt-graph"],
    visual: "graph",
    featured: false,
    year: null,
    domain: "Graph algorithms",
    sections: [
      {
        title: "Motivation",
        content:
          "Implementing a graph abstract data type makes the connection between representation and algorithms explicit. The project brings together vertex and edge operations, traversal, and pathfinding in one small library, exposing the work that a ready-made graph package would usually handle.",
      },
      {
        title: "How it works",
        content:
          "Graphs can be constructed in memory or read from text files. BFS and DFS iterators explore reachable vertices and retain paths. Dijkstra and Euclidean A* find shortest paths, while topological sorting, Kosaraju's strongly connected components, bridges, and bipartite checks examine graph structure. Exact maximum-clique and travelling-salesperson searches cover small graphs.",
      },
      {
        title: "Architecture",
        content:
          "domain/Graph.py owns the graph representation and algorithms, using dictionaries of inbound and outbound neighbour lists. domain/Iterator.py separates stateful BFS and DFS traversal from storage. Sample graph and coordinate files exercise file I/O; main.py runs the automated unittest suites. The implementation has no third-party runtime or test dependencies.",
      },
      {
        title: "Implementation decisions",
        content:
          "Neighbour lists keep the representation easy to inspect. Shortest-path routines use heapq and return the path, distance, and operation counters. A* validates vertex coordinates and checks that edge weights support its Euclidean heuristic. File parsing reports line-specific errors, and shortest-path routines reject negative weights even though the graph can store them.",
      },
      {
        title: "Challenges",
        content:
          "Algorithms need clear assumptions about direction, reachability, and weights. Tests cover graph operations and regression cases around these contracts. Performance also depends on the algorithm: the bridge routine repeats BFS for each edge, while clique and travelling-salesperson searches are exhaustive. Those routines are intended for understandable, small examples rather than large-scale workloads.",
      },
      {
        title: "What I learned",
        content:
          "The project connects abstract graph theory with concrete Python data structures, iterator state, and priority queues. It shows how representation choices affect both clarity and cost, and why an algorithm's preconditions belong in its API. Operation counters and automated tests make behavior easier to inspect beyond a single successful example.",
      },
    ],
  },
];

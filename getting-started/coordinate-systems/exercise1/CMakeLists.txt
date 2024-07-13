cmake_minimum_required(VERSION 3.10)
project(CoordinateSystemsExercise1)
set(CMAKE_EXPORT_COMPILE_COMMANDS ON)

# GLFW Directory
set(GLFW_ROOT "$ENV{HOME}/libs/glfw-3.4")
include_directories(${GLFW_ROOT}/include)
link_directories(${GLFW_ROOT}/build/src)

# GLAD Directory
include_directories(glad/include)

# Includes
include_directories(src/include)

add_executable(CoordinateSystemsExercise1 src/main.cpp glad/glad.c src/stb-image.cpp)
target_link_libraries(CoordinateSystemsExercise1 ${GLFW_ROOT}/build/src/libglfw3.a ${CMAKE_DL_LIBS})

configure_file(${CMAKE_SOURCE_DIR}/src/shaders/shader.frag ${CMAKE_BINARY_DIR}/shaders/shader.frag COPYONLY)
configure_file(${CMAKE_SOURCE_DIR}/src/shaders/shader.vert ${CMAKE_BINARY_DIR}/shaders/shader.vert COPYONLY)

configure_file(${CMAKE_SOURCE_DIR}/src/textures/awesomeface.png ${CMAKE_BINARY_DIR}/textures/awesomeface.png COPYONLY)
configure_file(${CMAKE_SOURCE_DIR}/src/textures/container.jpg ${CMAKE_BINARY_DIR}/textures/container.jpg COPYONLY)

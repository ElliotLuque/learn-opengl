cmake_minimum_required(VERSION 3.10)
project(BasicLightingExercise1)
set(CMAKE_EXPORT_COMPILE_COMMANDS ON)

# GLFW Directory
set(GLFW_ROOT "$ENV{HOME}/libs/glfw-3.4")
include_directories(${GLFW_ROOT}/include)
link_directories(${GLFW_ROOT}/build/src)

# GLAD Directory
include_directories(glad/include)

# Includes
include_directories(src/include)

add_executable(BasicLightingExercise1 src/main.cpp glad/glad.c)
target_link_libraries(BasicLightingExercise1 ${GLFW_ROOT}/build/src/libglfw3.a ${CMAKE_DL_LIBS})

configure_file(${CMAKE_SOURCE_DIR}/src/shaders/basic_lighting.frag ${CMAKE_BINARY_DIR}/shaders/basic_lighting.frag COPYONLY)
configure_file(${CMAKE_SOURCE_DIR}/src/shaders/basic_lighting.vert ${CMAKE_BINARY_DIR}/shaders/basic_lighting.vert COPYONLY)

configure_file(${CMAKE_SOURCE_DIR}/src/shaders/light_cube.frag ${CMAKE_BINARY_DIR}/shaders/light_cube.frag COPYONLY)
configure_file(${CMAKE_SOURCE_DIR}/src/shaders/light_cube.vert ${CMAKE_BINARY_DIR}/shaders/light_cube.vert COPYONLY)

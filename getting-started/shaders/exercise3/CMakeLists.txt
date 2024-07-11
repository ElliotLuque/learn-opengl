cmake_minimum_required(VERSION 3.10)
project(ShadersExercise3)
set(CMAKE_EXPORT_COMPILE_COMMANDS ON)

# GLFW Directory
set(GLFW_ROOT "$ENV{HOME}/libs/glfw-3.4")
include_directories(${GLFW_ROOT}/include)
link_directories(${GLFW_ROOT}/build/src)

# GLAD Directory
include_directories(glad/include)

# Includes
include_directories(src/include)

add_executable(ShadersExercise3 src/main.cpp glad/glad.c)
target_link_libraries(ShadersExercise3 ${GLFW_ROOT}/build/src/libglfw3.a ${CMAKE_DL_LIBS})

configure_file(${CMAKE_SOURCE_DIR}/src/shaders/3.3.shader.frag ${CMAKE_BINARY_DIR}/shaders/3.3.shader.frag COPYONLY)
configure_file(${CMAKE_SOURCE_DIR}/src/shaders/3.3.shader.vert ${CMAKE_BINARY_DIR}/shaders/3.3.shader.vert COPYONLY)

cmake_minimum_required(VERSION 3.10)
project(Colors)
set(CMAKE_EXPORT_COMPILE_COMMANDS ON)

# GLFW Directory
set(GLFW_ROOT "$ENV{HOME}/libs/glfw-3.4")
include_directories(${GLFW_ROOT}/include)
link_directories(${GLFW_ROOT}/build/src)

# GLAD Directory
include_directories(glad/include)

# Includes
include_directories(src/include)

add_executable(Colors src/main.cpp glad/glad.c)
target_link_libraries(Colors ${GLFW_ROOT}/build/src/libglfw3.a ${CMAKE_DL_LIBS})

configure_file(${CMAKE_SOURCE_DIR}/src/shaders/colors.frag ${CMAKE_BINARY_DIR}/shaders/colors.frag COPYONLY)
configure_file(${CMAKE_SOURCE_DIR}/src/shaders/colors.vert ${CMAKE_BINARY_DIR}/shaders/colors.vert COPYONLY)

configure_file(${CMAKE_SOURCE_DIR}/src/shaders/light_cube.frag ${CMAKE_BINARY_DIR}/shaders/light_cube.frag COPYONLY)
configure_file(${CMAKE_SOURCE_DIR}/src/shaders/light_cube.vert ${CMAKE_BINARY_DIR}/shaders/light_cube.vert COPYONLY)

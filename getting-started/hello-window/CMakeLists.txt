cmake_minimum_required(VERSION 3.10)
project(HelloWindow)
set(CMAKE_EXPORT_COMPILE_COMMANDS ON)

# GLFW Directory
set(GLFW_ROOT "$ENV{HOME}/libs/glfw-3.4")
include_directories(${GLFW_ROOT}/include)
link_directories(${GLFW_ROOT}/build/src)

# GLAD Directory
include_directories(glad/include)

add_executable(HelloWindow src/main.cpp glad/glad.c)
target_link_libraries(HelloWindow ${GLFW_ROOT}/build/src/libglfw3.a ${CMAKE_DL_LIBS})

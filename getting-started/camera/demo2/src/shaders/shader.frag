#version 330 core
out vec4 FragColor;

in vec2 TexCoord;

uniform sampler2D texture1;
uniform sampler2D texture2;

void main()
{
    // Lerp between container (80%) and awesomeface (20%)
    FragColor = mix(texture(texture1, TexCoord), texture(texture2, TexCoord), 0.2);
}

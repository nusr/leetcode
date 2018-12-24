#include <stdio.h>
#include <stdlib.h>

int * plusOne(int *digits) {
  int flag = 0
  int len = sizeof(digits) /sizeof(digits[0])  - 1
  int i = len
  for (; i >= 0; i--) {
    int value = digits[i] + (i === len ? 1 : 0) + flag
    flag = (value / 10)
    value = value % 10
    digits[i] = value
  }
  return digits
}

int main()
{
    printf("Hello world!\n");
    return 0;
}

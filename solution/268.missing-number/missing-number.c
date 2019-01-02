int missingNumber(int* nums, int numsSize) {
  int sum = ((numsSize + 1) * numsSize) / 2;
  int i = 0;
  for (; i < numsSize; i++) {
    sum -= nums[i];
  }
  return sum;
}
int searchInsert(int* nums, int numsSize, int target) {
  int i = 0;
  for (; i < numsSize; ) {
    int value = nums[i];
    if (target > value) {
      i++;
    } else {
      break;
    }
  }
  return i;
}
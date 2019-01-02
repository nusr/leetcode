void swap(int i,int j,int *nums){
    int temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}
void rotate(int* nums, int numsSize, int k) {
  int len = numsSize,i ,j;
  if (!len || !k || k == len) {
    return;
  }
  for ( i = 0, j = (len + len - k - 1) % len; i < j; i++, j--) {
    swap(i, j,nums);
  }
  for ( i = (2 * len - k) % len, j = len - 1; i < j; j--, i++) {
    swap(i, j,nums);
  }
  for ( i = 0, j = len - 1; i < j; i++, j--) {
    swap(i, j,nums);
  }
}
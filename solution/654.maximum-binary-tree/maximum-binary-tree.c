/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */

struct TreeNode *constructTree(int *nums, int left, int right)
{
    if (left > right)
    {
        return NULL;
    }
    struct TreeNode *root = (struct TreeNode *)malloc(sizeof(struct TreeNode));
    int max = nums[left];
    int flag = left;
    int i = left + 1;

    for (; i <= right; i++)
    {
        if (nums[i] > max)
        {
            max = nums[i];
            flag = i;
        }
    }
    root->val = max;
    root->left = constructTree(nums, left, flag - 1);
    root->right = constructTree(nums, flag + 1, right);
    return root;
}
struct TreeNode *constructMaximumBinaryTree(int *nums, int numsSize)
{
    return constructTree(nums, 0, numsSize - 1);
}
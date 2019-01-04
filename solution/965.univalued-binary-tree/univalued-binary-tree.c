/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */
int preOrder(struct TreeNode *root, int temp)
{
    if (!root)
    {
        return 1;
    }
    if (root->val == temp)
    {
        return preOrder(root->left,temp) && preOrder(root->right,temp);
    }
    else
    {
        return 0;
    }
}

bool isUnivalTree(struct TreeNode *root)
{
    if (!root)
    {
        return 1;
    }
    int temp = root->val;
    int left = preOrder(root->left, temp);
    int right = preOrder(root->right, temp);
    return left && right;
}
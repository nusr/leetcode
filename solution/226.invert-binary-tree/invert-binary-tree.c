/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */
void reverse(struct TreeNode*root){
    if(!root){
        return;
    }
    reverse(root->left);
    reverse(root->right);
    struct TreeNode*temp = root->left;
    root->left = root->right;
    root->right = temp;
}
struct TreeNode* invertTree(struct TreeNode* root) {
    reverse(root);
    return root;
}
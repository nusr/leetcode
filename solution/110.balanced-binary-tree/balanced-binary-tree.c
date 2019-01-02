/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */
int height(struct TreeNode * root){
    if(!root){
        return 0;
    }
    int left = height(root->left) + 1;
    int right = height(root->right) + 1;
    return left > right ? left : right;
    
}
bool isBalanced(struct TreeNode* root) {
    if(!root){
        return 1;
    }
    int leftTree = isBalanced(root->left);    
    int rightTree = isBalanced(root->right);
    int left = height(root->left);    
    int right = height(root->right);
    int temp = right - left;
    if(temp <=1 && temp >= -1){
        return leftTree && rightTree;
    }else {
        return 0;
    }

}
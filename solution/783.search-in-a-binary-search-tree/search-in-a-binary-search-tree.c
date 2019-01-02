/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */
struct TreeNode* searchBST(struct TreeNode* root, int val) {
    if(!root){
        return NULL;
    }
    struct TreeNode * temp = root;
    while(temp){
        if(temp->val == val){
            break;
        }else if(temp->val > val){
            temp = temp->left;
        }else {
            temp = temp->right;
        }
    }
    return temp;
}
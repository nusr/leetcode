/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */
struct TreeNode* insertIntoBST(struct TreeNode* root, int val) {
    struct TreeNode * temp = root,*pre = NULL;
    int flag = 0;
    while(temp){
        pre = temp;
        if(temp->val > val){
            flag = 0;
            temp = temp -> left;
        }else {
            flag = 1;
            temp = temp -> right;
        }
    }
    temp = (struct TreeNode *)malloc(sizeof(struct TreeNode));
    temp->val = val;
    temp->left = temp->right = NULL;
    if(flag){
        pre->right = temp;
    }else{
        pre->left = temp;
    }
    return root;
}
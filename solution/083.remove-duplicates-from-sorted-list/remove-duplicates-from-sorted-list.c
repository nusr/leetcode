/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* deleteDuplicates(struct ListNode* head) {
    struct ListNode * temp = head,*pre;
    int i = 0;
    int t = 0;
    int hash[200000];
    for(i = 0;i < 200000;i++)
        hash[i] = 0;
    while(temp != NULL)
    {
        t = temp->val + 10000;
        if(hash[t] == 0)
            hash[t] = 1;
        else
        {
            pre -> next = temp -> next;
            temp = temp -> next;
            continue;
        }
        pre = temp;
        temp = temp -> next;
    }
    return head;
}
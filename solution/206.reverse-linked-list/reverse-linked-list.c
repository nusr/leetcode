/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* reverseList(struct ListNode* head) {
    struct ListNode * temp = head;
    int j = 0;
    int ans[1000000];
    while(temp != NULL)
    {
        ans[j++] = temp -> val;
        temp = temp -> next;
    }
    temp = head;
    while(temp != NULL)
    {
        temp -> val = ans[--j];
        temp = temp -> next;
    }
    return head;
}
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* removeElements(struct ListNode* head, int val) {
    struct ListNode * temp = head ;
    struct ListNode * pre ;
    while(temp != NULL)
    {
        if(head->val == val)
            head = head->next;
        else if(temp->val == val)
        {
            pre->next = temp ->next;
            temp = temp->next;
            continue;
        }
        pre = temp;
        temp = temp ->next;
    }
    return head;
}
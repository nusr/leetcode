/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
bool isPalindrome(struct ListNode* head) {
    struct ListNode * temp = head;
    int record[1000000];
    int i = 0;
    int j = 0;
    if(temp == NULL)
        return true;
    while(temp != NULL)
    {
        record[j++] = temp -> val;
        temp = temp -> next;
    }
    j--;
    for(;i < j;i++,j--)
    {
        if(record[i] != record[j])
            return false;
    }
    return true;
}
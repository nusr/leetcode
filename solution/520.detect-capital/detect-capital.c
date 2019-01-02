bool detectCapitalUse(char* word) {
    int i = 0;
    if(word[i] >= 'A' && word[i] <= 'Z')
    {
        i++;
        if(word[i] >= 'A' && word[i] <= 'Z')
        {
            for(i++;word[i] != '\0';i++)
              if(word[i] < 'A' || word[i] > 'Z')
                 return false;
        }
        else if(word[i] >= 'a' && word[i] <= 'z')
        {
            i++;
            for(;word[i] != '\0';i++)
                if(word[i] < 'a' || word[i] > 'z')
                    return false;
        }
    }
    else if(word[i] >= 'a' && word[i] <= 'z')
    {
        i++;
        for(;word[i] != '\0';i++)
            if(word[i] < 'a' || word[i] > 'z')
                return false;
    }
    else
        return false;
    return true;
} 
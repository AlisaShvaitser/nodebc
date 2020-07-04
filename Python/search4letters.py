def search4vowels (phrase:str) -> set:
    return set ('aeiou').intersection (set(phrase))

def search4letters (phrase:str, letters:str='aeiou') -> set:
    '''return letters from phrase'''
    return set(letters).intersection(set(phrase))

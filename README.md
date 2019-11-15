# Fomantic Apprentice Action

Helps manage issues and pull requests!

## Inputs

### `GITHUB_SECRET`

**Required** A GitHub secret token with access to the repository. This should be stored in a secret.

## Example usage

```yaml
uses: fomantic/apprentice-action@master
with:
  GITHUB_SECRET: ${{ secrets.GITHUB_SECRET }}
```

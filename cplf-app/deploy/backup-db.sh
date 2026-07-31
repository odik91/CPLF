#!/usr/bin/env bash
# Backup PostgreSQL — jalankan via cron harian
# Usage: ./backup-db.sh /path/to/backups

set -euo pipefail

BACKUP_DIR="${1:-./backups}"
mkdir -p "$BACKUP_DIR"
STAMP=$(date +%Y%m%d_%H%M%S)
FILE="$BACKUP_DIR/cplf_${STAMP}.sql.gz"

pg_dump "${DATABASE_URL:-postgresql://postgres@localhost/cplf}" | gzip > "$FILE"
echo "Backup: $FILE"

# Hapus backup > 14 hari
find "$BACKUP_DIR" -name 'cplf_*.sql.gz' -mtime +14 -delete

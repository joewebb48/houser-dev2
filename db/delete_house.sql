DELETE FROM houses
where   id = $1;
SELECT * from houses ORDER BY id DESC;
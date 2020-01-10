<xsl:stylesheet version="2.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:xs="http://www.w3.org/2001/XMLSchema"
>
<xsl:output method="text" encoding="utf-8"/>

    <xsl:template name="getChilds">
        <xsl:value-of select="name()"/>
        <xsl:text>&#xa;</xsl:text>
        <xsl:for-each select="child::node()">
            <xsl:value-of select="concat('- ',name(),'&#xa;')"/>
        </xsl:for-each>
    </xsl:template>

    <xsl:template name="getColumnSizeInGameList">
        <xsl:param name="column"/>
        <xsl:param name="columnName"/>
        <xsl:for-each select="//gameList/game">
            <xsl:sort select="string-length(*[name()=$column])" data-type="number" order="ascending"/>
            <xsl:if test="position()=last()">
                <xsl:variable name="x0" select="string-length(*[name()=$column])"/>
                <xsl:variable name="x1" select="string-length($columnName)"/>
                <xsl:if test="$x0 > $x1">
                    <xsl:value-of select="$x0"/>
                </xsl:if>
                <xsl:if test="$x1 >= $x0">
                    <xsl:value-of select="$x1"/>
                </xsl:if>
            </xsl:if>
        </xsl:for-each>
    </xsl:template>

    <xsl:template match="/">
        <xsl:value-of select="//*[name()='description']"/>
        <xsl:text>&#xa;</xsl:text>
        <xsl:text>&#xa;</xsl:text>
        <xsl:apply-templates select="//gameList"/>
    </xsl:template>

    <xsl:template match="//gameList">
        <!-- Obliczenie długości kolumn -->
        <!-- title -->
        <xsl:variable name="titleColumnName" select="'Tytuł'"/>
        <xsl:variable name="titleLength">
            <xsl:call-template name="getColumnSizeInGameList">
                <xsl:with-param name="columnName" select="$titleColumnName"/>
                <xsl:with-param name="column" select="'title'"/>
            </xsl:call-template>
        </xsl:variable>
        <!-- price -->
        <xsl:variable name="priceColumnName" select="'Cena'"/>
        <xsl:variable name="priceLength">
            <xsl:call-template name="getColumnSizeInGameList">
                <xsl:with-param name="columnName" select="$priceColumnName"/>
                <xsl:with-param name="column" select="'price'"/>
            </xsl:call-template>
        </xsl:variable>
        <!-- genre -->
        <xsl:variable name="genreColumnName" select="'Gatunek'"/>
        <xsl:variable name="genreLength">
            <xsl:call-template name="getColumnSizeInGameList">
                <xsl:with-param name="columnName" select="$genreColumnName"/>
                <xsl:with-param name="column" select="'genre'"/>
            </xsl:call-template>
        </xsl:variable>
        <!-- releaseDate -->
        <xsl:variable name="releaseDateColumnName" select="'Data wydania'"/>
        <xsl:variable name="releaseDateLength">
            <xsl:call-template name="getColumnSizeInGameList">
                <xsl:with-param name="columnName" select="$releaseDateColumnName"/>
                <xsl:with-param name="column" select="'releaseDate'"/>
            </xsl:call-template>
        </xsl:variable>
        <!-- suma długości -->
        <xsl:variable name="width" select="10 + $titleLength + $priceLength + $genreLength + $releaseDateLength"/>
        <!-- Generowanie tabelki -->
        <!-- Wiersz z ramką -->
        <xsl:call-template name="repeat">
        <xsl:with-param name="value" select="'-'"/>
        <xsl:with-param name="length" select="$width"/>
    </xsl:call-template>
        <!-- Wiersz z nagłówkami -->
        <xsl:text>&#xa;| </xsl:text>
        <xsl:value-of select="$titleColumnName"/>
        <xsl:call-template name="repeat">
            <xsl:with-param name="value" select="' '"/>
            <xsl:with-param name="length" select="$titleLength - string-length($titleColumnName)"/>
        </xsl:call-template>

        <xsl:text>| </xsl:text>
        <xsl:value-of select="$priceColumnName"/>
        <xsl:call-template name="repeat">
            <xsl:with-param name="value" select="' '"/>
            <xsl:with-param name="length" select="$priceLength - string-length($priceColumnName)"/>
        </xsl:call-template>

        <xsl:text>| </xsl:text>
        <xsl:value-of select="$genreColumnName"/>
        <xsl:call-template name="repeat">
            <xsl:with-param name="value" select="' '"/>
            <xsl:with-param name="length" select="$genreLength - string-length($genreColumnName)"/>
        </xsl:call-template>

        <xsl:text>| </xsl:text>
        <xsl:value-of select="$releaseDateColumnName"/>
        <xsl:call-template name="repeat">
            <xsl:with-param name="value" select="' '"/>
            <xsl:with-param name="length" select="$releaseDateLength - string-length($releaseDateColumnName)"/>
        </xsl:call-template>
        <xsl:text> |</xsl:text>
        <!-- Wiersz z ramką -->
        <xsl:text>&#xa;</xsl:text>
        <xsl:call-template name="repeat">
            <xsl:with-param name="value" select="'-'"/>
            <xsl:with-param name="length" select="$width"/>
        </xsl:call-template>
        <xsl:for-each select="game">
            <xsl:text>&#xa;| </xsl:text>
            <xsl:variable name="title" select="title"/>
            <xsl:variable name="price" select="price"/>
            <xsl:variable name="genre" select="genre"/>
            <xsl:variable name="releaseDate" select="releaseDate"/>

            <xsl:value-of select="$title"/>
            <xsl:call-template name="repeat">
                <xsl:with-param name="value" select="' '"/>
                <xsl:with-param name="length" select="$titleLength - string-length($title)"/>
            </xsl:call-template>
            <xsl:text>| </xsl:text>

            <xsl:value-of select="$price"/>
            <xsl:call-template name="repeat">
                <xsl:with-param name="value" select="' '"/>
                <xsl:with-param name="length" select="$priceLength - string-length($price)"/>
            </xsl:call-template>
            <xsl:text>| </xsl:text>

            <xsl:value-of select="$genre"/>
            <xsl:call-template name="repeat">
                <xsl:with-param name="value" select="' '"/>
                <xsl:with-param name="length" select="$genreLength - string-length($genre)"/>
            </xsl:call-template>
            <xsl:text>| </xsl:text>

            <xsl:value-of select="$releaseDate"/>
            <xsl:call-template name="repeat">
                <xsl:with-param name="value" select="' '"/>
                <xsl:with-param name="length" select="$releaseDateLength - string-length($releaseDate)"/>
            </xsl:call-template>
            <xsl:text> |</xsl:text>
        </xsl:for-each>
        <!-- Wiersz z ramką -->
        <xsl:text>&#xa;</xsl:text>
        <xsl:call-template name="repeat">
            <xsl:with-param name="value" select="'-'"/>
            <xsl:with-param name="length" select="$width"/>
        </xsl:call-template>
    </xsl:template>

    <xsl:template name="repeat">
        <xsl:param name="value"/>
        <xsl:param name="length"/>
        <xsl:if test="$length &gt; 0">
            <xsl:value-of select="string($value)"/>
        </xsl:if>
        <xsl:if test="$length &gt; 1">
            <xsl:call-template name="repeat">
                <xsl:with-param name="value" select="$value"/>
                <xsl:with-param name="length" select="($length - 1)"/>
            </xsl:call-template>
        </xsl:if>
    </xsl:template>
</xsl:stylesheet>